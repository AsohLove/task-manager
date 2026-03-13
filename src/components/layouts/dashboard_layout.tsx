import { Outlet } from "react-router";
import { Sidebar } from "../sidebar";

export function DashboardLayout() {
    return (
        <div className="grid min-h-screen gap-5 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100 p-4 lg:grid-cols-[minmax(16rem,19rem)_minmax(0,1fr)]">
            <Sidebar />

            <main className="min-h-0 overflow-auto rounded-[2rem] border border-stone-800/10 bg-gradient-to-b from-white/80 to-stone-100/70 shadow-[0_24px_70px_rgba(77,47,25,0.14)] backdrop-blur">
                <Outlet />
            </main>
        </div>
    );
}
