import { useContext } from "react"
import { AuthContext } from "../auth-context"
import { Navigate, Outlet } from "react-router"

export function ProtectedRoutes() {
    const auth = useContext(AuthContext)

    if (!auth) {
        throw new Error("ProtectedRoutes must be used within AuthProvide")
    }

    const { isAuthenticated } = auth

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />

}
