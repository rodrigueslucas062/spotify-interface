import Link from "next/link";
const { HomeIcon, Search, Library, GalleryThumbnails,  } = require("lucide-react")

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
                        Search
                    </a>
                </div>
            </div>
            <div className="bg-zinc-800 space-y-1 p-2 rounded-t-lg mt-3">
                <a href="" className="flex items-center gap-3 p-1 text-xs font-semibold text-zinc-300 hover:text-neutral-50">
                    <Library />
                    Library
                </a>
            </div>
            <div className="flex-grow bg-neutral-900 space-y-1 p-2 rounded-b-lg">
                <div className="flex flex-col gap-3">
                    <Link href="/whiteboard" className="text-sm text-zinc-400 hover:text-zinc-100 flex gap-3 p-1">
                    <GalleryThumbnails />Whiteboard
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default renderAside;