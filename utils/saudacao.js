export function saudacao() {
    const agora = new Date()
    const hora = agora.getHours()

    if (hora >= 6 && hora <= 12) {
        return "Bom dia flor do dia"
    }else if (hora >= 13 && hora <= 18) {
        return "Boa tarde"
    }else {
        return "Boa noite"
    }
}
