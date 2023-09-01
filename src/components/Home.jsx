import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Curtidas from "../../public/images/album/curtidas.jpg"
import Samurai from "../../public/images/album/chippin-in.jpg"
import RiseRise from "../../public/images/album/rise-rise.jpg"
import Tdi from "../../public/images/album/the-devil-in-i.jpg"
import Archive from "../../public/images/album/archive.jpg"
import Aderal from "../../public/images/album/aderal.jpg"

const renderAside = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <HomeIcon />
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
            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
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
            <div className="flex items-center gap-4 mt-4">
                <button className="rounded-full bg-black/40 p-2 ">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-2">
                    <ChevronRight />
                </button>
            </div>
            <h1 className="font-semi-bold text-3xl mt-10">Bom dia</h1>
            <div className="grid grid-cols-3 gap-4">
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={Curtidas} alt="Capa playlist" width={90} height={90} />
                    <strong>Músicas Curtidas</strong>
                </a>
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={Samurai} alt="Capa playlist" width={90} height={90} />
                    <strong>Chippin' In</strong>
                </a>
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={RiseRise} alt="Capa playlist" width={90} height={90} />
                    <strong>Rise, Rise</strong>
                </a>
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={Tdi} alt="Capa playlist" width={90} height={90} />
                    <strong>The Devil In I</strong>
                </a>
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={Archive} alt="Capa playlist" width={90} height={90} />
                    <strong>Bullets</strong>
                </a>
                <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={Aderal} alt="Capa playlist" width={90} height={90} />
                    <strong>Aderal</strong>
                </a>
            </div>
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