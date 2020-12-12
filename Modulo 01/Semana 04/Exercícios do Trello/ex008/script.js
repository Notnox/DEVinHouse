const iNum = document.querySelector('#iNum')
const msgNum = document.querySelector('#num')
const msgResultado = document.querySelector('#resultado')
const arrayNum = []

function somar(){
    const valorNum = Number(iNum.value)

    if (iNum.value.length == 0){return window.alert('[ERRO] É necessário informar um número.')}

    arrayNum.push(valorNum)

    msgNum.innerHTML = ''
    arrayNum.forEach((nums) => {
        msgNum.innerHTML = nums + ' ' + msgNum.innerHTML
    })

    iNum.value = ''
}

function calcular(){
    const multiplicar = arrayNum.reduce((prevValor, Elem) => prevValor * Elem, 1)

    if (arrayNum.length == 1 || arrayNum.length == 0){ return window.alert(['[ERRO] É necessário informar pelomenos dois números para calcular.'])}

    msgResultado.innerHTML = multiplicar
}