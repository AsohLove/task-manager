import { createContext, useState, type ReactNode } from "react"

const AUTH_STORAGE_KEY = "task-manager-auth";
const USERS_STORAGE_KEY = "task-manager-users";

type AuthState = {
    isAuthenticated: boolean;
    userName: string;
};

type StoredUser = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type AuthContextValue = {
    isAuthenticated: boolean;
    userName: string;
    login: (email: string, password: string) => void;
    logout: () => void;
    signup: (firstName: string, lastName: string, email: string, password: string) => void;
};

function getStoredAuthState(): AuthState {
    if (typeof window === "undefined") {
        return { isAuthenticated: false, userName: "" };
    }

    const storedAuth = window.localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedAuth) {
        return { isAuthenticated: false, userName: "" };
    }

    try {
        const parsedAuth = JSON.parse(storedAuth) as Partial<AuthState>;

        return {
            isAuthenticated: Boolean(parsedAuth.isAuthenticated),
            userName: parsedAuth.userName ?? "",
        };
    } catch {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        return { isAuthenticated: false, userName: "" };
    }
}

function getStoredUsers(): StoredUser[] {
    if (typeof window === "undefined") {
        return [];
    }

    const storedUsers = window.localStorage.getItem(USERS_STORAGE_KEY);

    if (!storedUsers) {
        return [];
    }

    try {
        const parsedUsers = JSON.parse(storedUsers) as StoredUser[];
        return Array.isArray(parsedUsers) ? parsedUsers : [];
    } catch {
        window.localStorage.removeItem(USERS_STORAGE_KEY);
        return [];
    }
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvide({ children }: { children: ReactNode }) {
    const [authState, setAuthState] = useState<AuthState>(getStoredAuthState)

    function signup(firstName: string, lastName: string, email: string, nextPassword: string) {
        const normalizedEmail = email.trim().toLowerCase();
        const trimmedFirstName = firstName.trim();
        const trimmedLastName = lastName.trim();
        const existingUsers = getStoredUsers();

        if (existingUsers.some((user) => user.email === normalizedEmail)) {
            throw new Error("An account with this email already exists.");
        }

        const nextUser = {
            firstName: trimmedFirstName,
            lastName: trimmedLastName,
            email: normalizedEmail,
            password: nextPassword,
        };

        const nextAuthState = {
            isAuthenticated: true,
            userName: `${trimmedFirstName} ${trimmedLastName}`.trim() || normalizedEmail,
        };

        window.localStorage.setItem(
            USERS_STORAGE_KEY,
            JSON.stringify([...existingUsers, nextUser]),
        )

        setAuthState(nextAuthState)
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuthState))
    }

    function login(email: string, nextPassword: string) {
        const normalizedEmail = email.trim().toLowerCase();
        const existingUsers = getStoredUsers();
        const matchedUser = existingUsers.find((user) => user.email === normalizedEmail);

        if (!matchedUser) {
            throw new Error("No account found for this email.");
        }

        if (matchedUser.password !== nextPassword) {
            throw new Error("Incorrect password.");
        }

        const nextAuthState = {
            isAuthenticated: true,
            userName: `${matchedUser.firstName} ${matchedUser.lastName}`.trim() || matchedUser.email,
        };

        setAuthState(nextAuthState)
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuthState))
    }

    function logout() {
        setAuthState({ isAuthenticated: false, userName: "" })
        window.localStorage.removeItem(AUTH_STORAGE_KEY)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: authState.isAuthenticated,
                userName: authState.userName,
                login,
                logout,
                signup
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
