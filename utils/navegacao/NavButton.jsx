import { ChevronLeft, ChevronRight } from "lucide-react"

const NavButton = () => {
    return (
        <div className="flex items-center gap-4 mt-2">
            <button className="rounded-full bg-black/40 p-2 hover:bg-white/10">
                <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2 hover:bg-white/10">
                <ChevronRight />
            </button>
        </div>
    )
}

export default NavButton