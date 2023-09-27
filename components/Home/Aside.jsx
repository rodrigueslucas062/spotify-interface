import Link from "next/link";
const { HomeIcon, Search, Library, GalleryThumbnails, Gamepad2,  } = require("lucide-react")

const renderAside = () => {
    return (
        <aside className="flex-2 w-72 flex flex-col justify-between">
            <div className="bg-zinc-950 space-y-3">
                <div className="bg-zinc-800 space-y-1 rounded-lg">
                    <a href="" className="flex items-center p-3 gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                        <HomeIcon />
                        Home
                    </a>
                    <a href="" className="flex items-center p-3 gap-3 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                        <Search />
                        Pesquisar
                    </a>
                </div>
            </div>
            <div className="bg-zinc-800 space-y-1 p-2 rounded-t-lg mt-3">
                <a href="" className="flex items-center gap-3 p-1 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <Library />
                    Galeria
                </a>
            </div>
            <div className="flex-grow bg-neutral-900 space-y-1 p-2 rounded-b-lg">
                <div className="flex flex-col gap-3">
                    <Link href="/whiteboard"  className="group rounded flex items-center gap-4 p-2 overflow-hidden hover:bg-zinc-800 transition-colors">
                    <GalleryThumbnails />Blackboard
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href="/personagem"  className="group rounded flex items-center gap-4 p-2 overflow-hidden hover:bg-zinc-800 transition-colors">
                    <Gamepad2 />Ficha
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default renderAside;