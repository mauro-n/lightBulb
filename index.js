window.onload = () => {
    const ambiente = document.querySelector("body")
    const lampada = document.querySelector("#lampada")

    let estaLigado = false;

    function ligaDesliga() {
        estaLigado = !estaLigado

        if (estaLigado) {
            lampada.src = "./bulb2.png"            
            ambiente.classList.remove("apagado")
        } else {
            lampada.src = "./bulb1.png"
            ambiente.classList.add("apagado")
        }
    }
    
    lampada.addEventListener("click", ligaDesliga)
}


