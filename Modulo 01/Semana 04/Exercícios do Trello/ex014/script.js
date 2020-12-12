const msg = document.querySelector('#msg')
const registro = [
    {cidade: 'Curitiba', estado: 'PR'},
    {cidade: 'Vitória', estado: 'ES'},
    {cidade: 'Florianópolis', estado: 'SC'},
    {cidade: 'Rio de Janeiro', estado: 'RJ'},
    {cidade: 'Itajai', estado: 'SC'},
    {cidade: 'Porto Alegre', estado: 'RS'},
    {cidade: 'São José', estado: 'SC'},
]

const verificar = () => {
    registro.map((sigla) =>{
        if (sigla.estado == 'PR' || sigla.estado == 'RS'){
            return msg.innerHTML = sigla.cidade + ', ' + msg.innerHTML
        }
    })
}