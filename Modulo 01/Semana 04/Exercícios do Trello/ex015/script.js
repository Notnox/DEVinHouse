const msg = document.querySelector('#msg')
const registro = [
    {cidade: 'Gramado', estado: 'RS'},
    {cidade: 'Vitória', estado: 'ES'},
    {cidade: 'Florianópolis', estado: 'SC'},
    {cidade: 'Rio de Janeiro', estado: 'RJ'},
    {cidade: 'Itajai', estado: 'SC'},
    {cidade: 'Porto Alegre', estado: 'RS'},
    {cidade: 'São José', estado: 'SC'},
]

const verificar = () => {
    if (registro.some(elem => elem.estado == 'RS')) {
        return msg.innerHTML = 'No registro foi identificado pelo menos uma cidade no estado de RS'
    } else {
        return msg.innerHTML = 'No registro não foi identificado nenhuma cidade no estado de RS'
    }
}