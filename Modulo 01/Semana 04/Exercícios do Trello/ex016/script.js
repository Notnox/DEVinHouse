const msg = document.querySelector('#msg')
const registro = {
    cidade: 'Florianópolis', 
    estado: 'SC'
}

const separar = ( {cidade, estado} ) => {
    console.log(cidade,estado)
    msg.innerHTML = `Cidade: ${cidade}, Estado: ${estado}`
}

const verificar = () => {
    separar(registro)
}