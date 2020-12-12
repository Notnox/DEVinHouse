const msg = document.querySelector('#msg')
const registro = {bairro: 'Santa Monica', cidade: 'Florianópolis', estado: 'Santa Catarina'}

const verificar = () => msg.innerHTML = `Bairro: ${registro.bairro}, Cidade: ${registro.cidade}, Estado: ${registro.estado}`