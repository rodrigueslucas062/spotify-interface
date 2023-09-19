import Image from "next/image"
import Curtidas from "../../public/images/album/curtidas.jpg"
import Samurai from "../../public/images/album/chippin-in.jpg"
import RiseRise from "../../public/images/album/rise-rise.jpg"
import Tdi from "../../public/images/album/the-devil-in-i.jpg"
import Archive from "../../public/images/album/archive.jpg"
import Aderal from "../../public/images/album/aderal.jpg"
import { Play } from "lucide-react"
import { saudacao } from "../../utils/saudacao"
import NavButton from "../../utils/navegacao/NavButton"

const renderMainPlay = () => {
    return (
        <main className="flex-1 space-y-5 pl-3 bg-zinc-950">
            <div className="bg-zinc-800 rounded-lg h-full">
                <div className="p-4">
                    {/* Botão de Navegação */}
                    <NavButton />
                    <h1 className="font-bold text-3xl mt-10 gap-4 mb-3">{saudacao()}</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={Curtidas} alt="Capa playlist" width={90} height={90} />
                            <strong>Músicas Curtidas</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="black" />
                            </button>
                        </a>
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={Samurai} alt="Capa playlist" width={90} height={90} />
                            <strong>Chippin' In</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="black" />
                            </button>
                        </a>
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={RiseRise} alt="Capa playlist" width={90} height={90} />
                            <strong>Rise, Rise</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="black" />
                            </button>
                        </a>
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={Tdi} alt="Capa playlist" width={90} height={90} />
                            <strong>The Devil In I</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="black" />
                            </button>
                        </a>
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={Archive} alt="Capa playlist" width={90} height={90} />
                            <strong>Bullets</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="" />
                            </button>
                        </a>
                        <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                            <Image src={Aderal} alt="Capa playlist" width={90} height={90} />
                            <strong>Aderal</strong>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                <Play fill="black" />
                            </button>
                        </a>
                    </div>
                    <h2 className="font-bold text-2xl mt-10">Feito para você</h2>
                    <div className="ml-4">
                        <div className="grid grid-cols-6 gap-4 mt-4">
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={Aderal} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">Aderal</strong>
                                <span className="text-sm text-zinc-500">Aderal, de Slipknot</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={Archive} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">Bullets</strong>
                                <span className="text-sm text-zinc-500">Bullets, de Archive</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={RiseRise} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">Rise, rise</strong>
                                <span className="text-sm text-zinc-500">Rise, Rise, de Rammstein</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={Tdi} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">The devil in i</strong>
                                <span className="text-sm text-zinc-500">The Devil in I, de Slipknot</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={Samurai} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">Chippin' in</strong>
                                <span className="text-sm text-zinc-500">Chippin' in, de Samurai</span>
                            </a>
                            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                                <Image className="w-auto" src={Tdi} alt="Capa playlist" width={190} height={190} />
                                <strong className="font-semi-bold">The devil in i</strong>
                                <span className="text-sm text-zinc-500">The Devil in I, de Slipknot</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default renderMainPlay;