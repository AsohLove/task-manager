import { SignUpForm } from "../components/sign-up";

export function SignUpPage() {
    return (
        <main className="relative grid min-h-screen overflow-hidden bg-gradient-to-br from-stone-950 via-orange-950 to-amber-950 p-5 text-stone-50 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,30rem)] lg:gap-8 lg:p-8">
            <div className="pointer-events-none absolute left-[-5rem] top-[-4rem] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] right-[-3rem] h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />

            <section className="relative z-10 flex flex-col justify-center px-0 py-6 text-left lg:px-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-300">Create Account</p>
                <h1 className="max-w-[11ch] font-serif text-5xl leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.2rem]">
                    Start strong with a workspace built for focus.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 lg:text-[1.05rem]">
                    Set up your account, bring your priorities into one place, and move from planning to execution without the clutter.
                </p>

                <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                        <span className="block text-2xl font-bold text-white">01</span>
                        <p className="mt-2 text-sm leading-6 text-stone-300">Create your account and keep your work synced across refreshes.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                        <span className="block text-2xl font-bold text-white">02</span>
                        <p className="mt-2 text-sm leading-6 text-stone-300">Track tasks, deadlines, and team momentum from one dashboard.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                        <span className="block text-2xl font-bold text-white">03</span>
                        <p className="mt-2 text-sm leading-6 text-stone-300">Stay focused with a calmer workflow designed for daily execution.</p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 flex items-center justify-center">
                <div className="w-full max-w-lg rounded-[1.8rem] border border-white/10 bg-white/95 p-8 text-left shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Join Task Manager</p>
                        <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950">
                            Create your account
                        </h2>
                        <p className="mt-4 text-base leading-7 text-stone-600">
                            Tell us a little about you and we&apos;ll open your workspace right away.
                        </p>
                    </div>
                    <SignUpForm />
                </div>
            </section>
        </main>
    )
}
