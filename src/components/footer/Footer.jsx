const { Shuffle, SkipBack, Play, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, SkipForward } = require("lucide-react")
import Image from "next/image";
import Samurai from "../../../public/images/album/chippin-in.jpg"

const renderFooter = () => {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src={Samurai} alt="Capa playlist" width={60} height={60} />
                <div className="flex flex-col gap-1">
                    <strong className="font-normal">Chippin' In</strong>
                    <span className="text-xs text-zinc-400">Samurai</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-4">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />
                    <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-white text-black">
                        <Play />
                    </button>
                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-400">4:16</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className="flex items-center gap-2">
                    <Volume size={20} />
                    <div className="h1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                    </div>
                </div>
                <Maximize size={20} />
            </div>
        </footer>
    )
}

export default renderFooter;