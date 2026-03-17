import TaskList from '../../tasks/components/TaskList'

type Task = {
    id: number;
    title: string;
    status: "Completed" | "In Progress" | "Pending";
};

const dummyTasks: Task[] = [
    { id: 1, title: "Finish My Assignment", status: "Pending" },
    { id: 2, title: "Go to school Early", status: "In Progress" },
    { id: 3, title: "Learn React in School", status: "In Progress" },
    { id: 4, title: "Go Back Home Early", status: "Pending" }
];

export function Home() {
    return (
        <>
            <section className="space-y-8 p-8 text-left lg:p-10">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Overview</p>
                    <h2 className="mt-2 font-serif text-4xl tracking-[-0.04em] text-stone-950 sm:text-5xl">
                        Build momentum without losing the thread.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
                        The dashboard now uses Tailwind all the way through, so the main panel can evolve with the same visual language as the login page and sidebar.
                    </p>
                </div>

                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(18rem,1fr)]">
                    <div className="rounded-[1.75rem] border border-stone-800/10 bg-white/75 p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Priority Board</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            <article className="rounded-3xl bg-orange-50 p-5">
                                <p className="text-sm font-semibold text-stone-950">Ship onboarding polish</p>
                                <p className="mt-2 text-sm leading-6 text-stone-500">Refine empty states and tighten first-run guidance.</p>
                            </article>
                            <article className="rounded-3xl bg-stone-100 p-5">
                                <p className="text-sm font-semibold text-stone-950">Close QA loop</p>
                                <p className="mt-2 text-sm leading-6 text-stone-500">Verify the release checklist and unblock the final review.</p>
                            </article>
                            <article className="rounded-3xl bg-amber-50 p-5">
                                <p className="text-sm font-semibold text-stone-950">Prep team sync</p>
                                <p className="mt-2 text-sm leading-6 text-stone-500">Summarize wins, risks, and tasks that need ownership.</p>
                            </article>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-stone-800/10 bg-gradient-to-br from-stone-900 to-stone-700 p-6 text-stone-50 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Team Load</p>
                        <p className="mt-3 font-serif text-5xl leading-none">86%</p>
                        <p className="mt-3 text-sm leading-6 text-stone-300">
                            Delivery is on track, but one stream is approaching capacity. Rebalance after the afternoon review.
                        </p>
                        <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-orange-400 to-amber-200" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-8xl px-8 py-10 lg:px-10">
                <div className="rounded-[1.75rem] border border-stone-800/10 bg-white/75 p-6 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Upcoming Tasks</p>
                    <div className="mt-5">
                        <TaskList tasks={dummyTasks} />
                    </div>
                </div>

                <div className="rounded-[1.75rem] border border-stone-800/10 bg-white/75 p-6 shadow-sm my-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Upcoming Events</p>
                    <div className="mt-5">
                        <p>No Current Event coming up</p>
                    </div>
                </div>
            </section>
        </>
    )
}
