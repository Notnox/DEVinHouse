const iNota = document.querySelector('#iNota')
const msgNota = document.querySelector('#notas')
const msgMedia = document.querySelector('#media')
const arrayNota = []

function somar(){
    const valorNota = Number(iNota.value)

    if (iNota.value.length == 0){return window.alert('[ERRO] É necessário informar uma nota.')}
    if (valorNota < 0 || valorNota > 10) {return window.alert('[ERRO] Só é permitido valores entre 0 até 10.')}

    arrayNota.push(valorNota)

    msgNota.innerHTML = ''
    arrayNota.forEach((notas) => {
        msgNota.innerHTML = notas + ' ' + msgNota.innerHTML
    })

    iNota.value = ''
}

function calcular(){
    if (arrayNota.length == 0) {return window.alert('[ERRO] Para calcular uma média, é necessário informar as notas.')}

    var soma = 0

    arrayNota.forEach((notas) =>{
        soma += parseInt(notas)
    })

    const media = soma / arrayNota.length

    msgMedia.innerHTML = `A sua média é : ${media.toFixed(2)}`
}