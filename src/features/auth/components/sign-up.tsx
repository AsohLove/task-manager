import { useContext, useState, type FormEvent } from "react"
import { AuthContext } from "../auth-context"
import { Link, useNavigate } from "react-router"

export function SignUpForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    if (!auth) {
        throw new Error("SignUpForm must be used within AuthProvide")
    }

    const { signup } = auth

    function handleSignUp(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }

        try {
            signup(firstName, lastName, email, password)
            navigate('/')
        } catch (signupError) {
            if (signupError instanceof Error) {
                setError(signupError.message)
                return
            }

            setError("Unable to create your account.")
        }
    }

    return (
        <form className="mt-7 grid gap-4" onSubmit={handleSignUp}>
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">First name</label>
                    <input
                        className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                        value={firstName}
                        placeholder="Jane"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Last name</label>
                    <input
                        className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                        value={lastName}
                        placeholder="Doe"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Email</label>
                <input
                    className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                    type="email"
                    value={email}
                    placeholder="jane@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Password</label>
                    <input
                        className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                        type="password"
                        value={password}
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="grid gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Confirm password</label>
                    <input
                        className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                        type="password"
                        value={confirmPassword}
                        placeholder="Repeat your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>

            {error ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                </p>
            ) : null}

            <button
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-800 px-5 py-4 text-sm font-bold tracking-[0.04em] text-orange-50 shadow-[0_16px_32px_rgba(165,67,27,0.28)] transition duration-150 hover:-translate-y-0.5 hover:saturate-110 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-500/20"
                type="submit"
            >
                Create account
            </button>

            <p className="text-sm text-stone-600">
                Already have an account?{" "}
                <Link className="font-semibold text-orange-700 transition hover:text-orange-800" to="/login">
                    Log in
                </Link>
            </p>
        </form>
    )
}
