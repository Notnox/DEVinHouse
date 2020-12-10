const iNum = document.querySelector('#iNum')
const msgNum = document.querySelector('#num')
const msgExponencial = document.querySelector('#exponencial')
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
    if (arrayNum.length == 0) {return window.alert('[ERRO] Para calcular, é necessário informar os números.')}
    
    const quadrado = arrayNum.map((valor) => {
        return valor * valor
    })

    quadrado.forEach((nums) => {
        msgExponencial.innerHTML = nums + ' ' + msgExponencial.innerHTML
    })
}