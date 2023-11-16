class Lampada {
    constructor(domEl, ambiente) {
        this.lampada = domEl
        this.ambiente = ambiente
        this.isOn = false
        this.lampada.addEventListener("click", this.alternar.bind(this))
    }

    alternar() {
        this.isOn = !this.isOn
        if (this.isOn) {
            this.lampada.src = "./bulb2.png"
            this.ambiente.classList.remove("dark")
            this.ambiente.classList.add("bright")
        } else {
            this.lampada.src = "./bulb1.png"
            this.ambiente.classList.remove("bright")
            this.ambiente.classList.add("dark")
        }

        return
    }
}

window.onload = (() => {
    const lampadaEl = document.querySelector("#lampada");
    const ambiente = document.querySelector("body")
    const lampada = new Lampada(lampadaEl, ambiente)
})