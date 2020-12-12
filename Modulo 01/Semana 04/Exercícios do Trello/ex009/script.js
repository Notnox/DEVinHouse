const msg = document.querySelector('#msg')

const getPerson = (nome, idade) => {
    return `Olá, eu sou ${nome}, e tenho ${idade} anos`
}

msg.innerHTML = getPerson('Roberto',17)
console.log(getPerson('Roberto',17))