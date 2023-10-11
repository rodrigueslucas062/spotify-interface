const classes = ["Solo", "Roqueiro", "Netrunner", "Técnico", "Nômade", "Atravessador", "Polícial", "Executivo", "Mídia", "Tecnomédico"]
const atributos = ["INT", "REF", "TEC", "AuCon", "ATR", "SOR", "MOV", "TCO", "EMP", "Correr", "Saltar", "Levantar"]

function criarDivsComClasses(arrayDeDados) {
    return arrayDeDados.map((item, index) => (
        <div className="flex gap-2" key={index}>
            <input type="checkbox" />
            <span>{item}</span>
        </div>
    ));
}

function criarDivsComAtributos(arrayDeDados) {
    return arrayDeDados.map((item, index) => (
        <div className="flex gap-2" key={index}>
            <input type="checkbox" />
            <span>{item}</span>
        </div>
    ));
}

export { classes, atributos, criarDivsComClasses,  criarDivsComAtributos};