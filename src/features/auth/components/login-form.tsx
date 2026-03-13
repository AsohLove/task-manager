import { useContext, useState } from "react"
import { AuthContext } from "../auth-context"
import { Link, useNavigate } from "react-router"
import type { FormEvent } from "react"

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    if (!auth) {
        throw new Error("LoginForm must be used within AuthProvide")
    }

    const { login } = auth

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        setError("")

        try {
            login(email, password)
            navigate('/')
        } catch (loginError) {
            if (loginError instanceof Error) {
                setError(loginError.message)
                return
            }

            setError("Unable to log in.")
        }
    }

    return (
        <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Email</label>
                <input
                    className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.08em] text-stone-950">Password</label>
                <input
                    className="w-full rounded-2xl border border-stone-700/15 bg-stone-50 px-4 py-4 text-stone-950 outline-none transition duration-150 placeholder:text-stone-400 focus:-translate-y-px focus:border-orange-500/70 focus:ring-4 focus:ring-orange-500/15"
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
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
                Login
            </button>
            <p className="text-sm text-stone-600">
                Don&apos;t have an account?{" "}
                <Link className="font-semibold text-orange-700 transition hover:text-orange-800" to="/sign-up">
                    Sign up
                </Link>
            </p>
        </form>
    )
}
