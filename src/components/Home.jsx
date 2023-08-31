import { Home as Homeicon, Search, Library } from "lucide-react"

const renderAside = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Homeicon />
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Library />
                    Library
                </a>
            </nav>
            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 2</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 3</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 5</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 6</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 7</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 8</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 9</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 10</a>       
            </nav>
        </aside>
    )
}

const renderMain = () => {
    return (
        <main className="flex-1 p-6">
            Main
        </main>
    )
}
const Home = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                {/* Area aside */}
                {renderAside()}
                {/* Area main */}
                {renderMain()}
            </div>
            <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
                footer
            </footer>
        </div>
    )
}
export default Home