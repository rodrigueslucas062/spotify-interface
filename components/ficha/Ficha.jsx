import { atributos, classes, criarDivsComAtributos, criarDivsComClasses } from "../../utils/ficha/classes";
import NavButton from "../../utils/navegacao/NavButton"

const Ficha = () => {
    const papeis = criarDivsComClasses(classes)
    const atributo = criarDivsComAtributos(atributos)

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
                    <div>
                        <div>
                            <span>VIT</span> <span>MTC</span>
                        </div>
                        <div>
                            <span>Leve</span>
                            <span>Grave</span>
                            <span>Critico</span>
                            <span>Mortal-0</span>
                            <span>mortal-1</span>
                        </div>
                        <div>
                            <p>Atord=0 Atord=1 Atord=2 Atord=3 Atord=4</p>
                        </div>
                        <div>
                            <span>mortal-2</span>
                            <span>mortal-3</span>
                            <span>mortal-4</span>
                            <span>mortal-5</span>
                            <span>mortal-6</span>
                        </div>
                        <div>
                            <p>Atord=4 Atord=6 Atord=7 Atord=8 Atord=9</p>
                        </div>
                        <div>
                            <span>PERÍCIAS</span>
                            <p>Somente os pontos de cada Perícia como Atributo correspondente e amote-os no campo correto. Marque com um X ao lado dos colchetes as pericias por Chips</p>
                        </div>
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