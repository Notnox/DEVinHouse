const iNum1 = document.querySelector('#num1')
const iNum2 = document.querySelector('#num2')
const resultado = document.querySelector('#resultado')

const calcular = () => {
    const num1 = Number(iNum1.value)
    const num2 = Number(iNum2.value)
    const area = num1 * num2

    return resultado.innerHTML = `A área desse retangulo é de ${area} m²`
    
}

