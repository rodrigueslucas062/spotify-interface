import { atributos, classes, criarDivsComAtributos, criarDivsComClasses } from "../../utils/ficha/classes";
import NavButton from "../../utils/navegacao/NavButton"

const Ficha = () => {
    const papeis = criarDivsComClasses(classes)
    const atributo = criarDivsComAtributos(atributos)

    const renderBoxArea1 = () => {
        return (
            <div className="space-y-4">
                <div className="flex d-flex gap-4">
                    <div className="w-1/5">
                        <span>Leve</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Grave</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Critico</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-0</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-1</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                </div>
                <div className="flex border border-gray-400">
                    <p className="p-2 w-full">Atord=0</p>
                    <p className="p-2 w-full">Atord=1</p>
                    <p className="p-2 w-full">Atord=2</p>
                    <p className="p-2 w-full">Atord=3</p>
                    <p className="p-2 w-full">Atord=4</p>
                </div>
                <div className="flex space-x-3 gap-8">
                    <div className="w-1/5">
                        <span>Mortal-2</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-3</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-4</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-5</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <span>Mortal-6</span>
                        <div className="flex">
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                            <div className="w-1/4 border border-gray-400 p-2"></div>
                        </div>
                    </div>
                </div>
                <div className="flex border border-gray-400">
                    <p className="p-2 w-full">Atord=5</p>
                    <p className="p-2 w-full">Atord=6</p>
                    <p className="p-2 w-full">Atord=7</p>
                    <p className="p-2 w-full">Atord=8</p>
                    <p className="p-2 w-full">Atord=9</p>
                </div>
            </div>
        )
    }

    return (
        <form action="" className="py-12 mx-40">
            <div className="d-flex flex gap-5 p-5">
                <div className="w-1/2">
                    <div className="flex gap-3">
                        <span>Nome:</span>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-wrap space-x-4">
                        <span>Papel:</span>
                        {papeis}
                    </div>
                    <div className="flex flex-wrap space-x-4">
                        <span>Atributos:</span>
                        {atributo}
                    </div>
                    <div className="flex">
                        <div>
                            <div className="flex flex-col border border-gray-400 p-2">
                                <span>Localização</span>
                            </div>
                            <div className="flex flex-col border border-gray-400 p-2">
                                <span>Blindagem PB</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex h-full border-t">
                                <span className="border border-gray-400 p-2">Cabeça 1</span>
                                <span className="border border-gray-400 p-2">Torso 2-4</span>
                                <span className="border border-gray-400 p-2">Braço D. 5</span>
                                <span className="border border-gray-400 p-2">Braço E. 6</span>
                                <span className="border border-gray-400 p-2">Perna D. 7-8</span>
                                <span className="border border-gray-400 p-2">Perna E. 9-0</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="flex flex-col border border-gray-400 p-3">
                            <span>VIT</span>
                        </div>
                        <div className="flex flex-col border border-gray-400 p-3">
                            <span>MTC</span>
                        </div>
                        {renderBoxArea1()}
                    </div>
                    <div>
                        <span>PERÍCIAS</span>
                        <p>Somente os pontos de cada Perícia como Atributo correspondente e amote-os no campo correto. Marque com um X ao lado dos colchetes as pericias por Chips</p>
                    </div>
                </div>
                <div className="w-1/2 space-y-4">
                    <h6>Cyberpunk</h6>
                    <div className="h-full border-2 rounded-3xl border-gray-400 p-4 ">
                        <h3>Desenho do personagem</h3>
                    </div>
                </div>
            </div>
            <div className='p-3' style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <NavButton />
            </div>
        </form>

    )
}

export default Ficha;