const iNum1 = document.querySelector('#num1')
const iNum2 = document.querySelector('#num2')
const resultado = document.querySelector('#resultado')

const som = (primeiro,segundo) => new Promise((resolve, reject) => {

    const soma = primeiro + segundo

    if(soma % 2 == 0) {
        return resolve(`A soma destes dois números é ${soma} e é um número par`)
    } 
    
    return reject('Só será impresso a soma dos números se o resultado for PAR')
})

const calcular = () => {
    const num1 = Number(iNum1.value)
    const num2 = Number(iNum2.value)
    
    som(num1, num2)
    .then((soma) => {
        console.log(soma)
        resultado.innerHTML = soma
    })
    .catch((err) => {
        console.log(err)
        resultado.innerHTML = err
    })
}

