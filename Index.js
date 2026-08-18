class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "um ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


const Ainz = new Heroi("Ainz", 1000, "mago")
const Kirito = new Heroi("Kirito", 21, "guerreiro")
const DrStone = new Heroi("Dr. Stone", 18, "monge")
const Naruto = new Heroi("Naruto", 16, "ninja")

Ainz.atacar()
Kirito.atacar()
DrStone.atacar()
Naruto.atacar()
