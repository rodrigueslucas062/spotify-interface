import Link from "next/link";
const { HomeIcon, Search, Library } = require("lucide-react")

const renderAside = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <HomeIcon />
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <Search />
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <Library />
                    Library
                </a>
            </nav>
            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <Link href="/whiteboard" className="text-sm text-zinc-400 hover:text-zinc-100">
                    Whiteboard
                </Link>
            </nav>
        </aside>
    )
}

export default renderAside;