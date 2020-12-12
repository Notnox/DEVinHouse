const msg = document.querySelector('#msg')
const registro = [
    {cidade: 'São Paulo', estado: 'SP'},
    {cidade: 'Vitória', estado: 'ES'},
    {cidade: 'Florianópolis', estado: 'SC'},
    {cidade: 'Rio de Janeiro', estado: 'RJ'},
    {cidade: 'Itajai', estado: 'SC'},
    {cidade: 'Brasília', estado: 'DF'},
    {cidade: 'São José', estado: 'SC'},
]

function verificar(){
    const menorArray = registro.filter(elem => elem.estado == 'SC')

    menorArray.forEach((nomes) => {
        msg.innerHTML = nomes.cidade + ', ' + msg.innerHTML
    })
}