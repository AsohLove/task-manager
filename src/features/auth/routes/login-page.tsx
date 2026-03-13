import { LoginForm } from "../components/login-form";

export default function LoginPage() {
    return (
        <main className="relative grid min-h-screen overflow-hidden bg-gradient-to-br from-stone-50 via-orange-50 to-amber-100 p-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,28rem)] lg:gap-8 lg:p-8">
            <div className="pointer-events-none absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute right-[18%] top-[-5rem] h-72 w-72 rounded-full bg-white/60 blur-3xl" />

            <section className="relative z-10 flex flex-col justify-center px-0 py-4 text-left lg:px-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Task Manager</p>
                <h1 className="max-w-[12ch] font-serif text-5xl leading-[0.92] tracking-[-0.06em] text-stone-950 sm:text-6xl lg:text-[5.4rem]">
                    Sign in and get your day under control.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 lg:text-[1.05rem]">
                    Keep tasks, deadlines, and priorities in one focused workspace built for fast daily check-ins.
                </p>

                <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-[0_18px_40px_rgba(105,72,46,0.08)] backdrop-blur">
                        <span className="mb-1 block font-sans text-[1.35rem] font-bold text-stone-950">Fast</span>
                        <span className="block text-sm leading-6 text-stone-600">
                            Quick access to today&apos;s work
                        </span>
                    </div>
                    <div className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-[0_18px_40px_rgba(105,72,46,0.08)] backdrop-blur">
                        <span className="mb-1 block font-sans text-[1.35rem] font-bold text-stone-950">Clear</span>
                        <span className="block text-sm leading-6 text-stone-600">
                            A calmer view of what matters next
                        </span>
                    </div>
                </div>
            </section>

            <section className="relative z-10 flex items-center justify-center">
                <div className="w-full max-w-md rounded-[1.8rem] border border-stone-800/10 bg-white/80 p-8 text-left shadow-[0_30px_80px_rgba(71,40,16,0.14)] backdrop-blur">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Welcome back</p>
                        <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-stone-950">
                            Log in to continue
                        </h2>
                        <p className="mt-4 text-base leading-7 text-stone-600">
                            Enter your details to open your workspace.
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </main>
    );
}
