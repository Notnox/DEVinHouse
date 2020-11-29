var img = window.document.querySelector('main#img')
var msg = window.document.querySelector('h1#msg')
var data = new Date
var mes = data.getMonth()

estacao(mes)

function estacao(vmes) {
    if (vmes == 11 || vmes <= 1){
        window.document.body.style.background = "rgba(200, 200, 0,.6)"
        msg.innerHTML = "Estamos no verão!"
        msg.style.background = "rgba(255, 255, 0,.8)"
        img.style.background = "url('imagens/verao.jpg')"
    } else if (vmes <= 4) {
        window.document.body.style.background = "rgba(139, 69, 19,.6)"
        msg.innerHTML = "Estamos no outono!"
        msg.style.background = "rgba(139, 69, 19,.7)"
        img.style.background = "url('imagens/outono.jpg')"
    } else if (vmes <= 7) {
        window.document.body.style.background = "rgba(0, 0, 200,.6)"
        msg.innerHTML = "Estamos no inverno!"
        msg.style.background = "rgba(0, 0, 255,.8)"
        img.style.background = "url('imagens/inverno.jpg')"
    } else {
        window.document.body.style.background = "rgba(0, 200, 0,.6)"
        msg.innerHTML = "Estamos na primavera!"
        msg.style.background = "rgba(0, 255, 0,.5)"
        img.style.background = "url('imagens/primavera.jpg')"
    }
}