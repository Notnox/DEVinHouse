const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 22, prof: 'Programador'},
    {nome: 'Carla', sexo: 'Feminino', idade: 23, prof: 'Programador'},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 24, prof: 'Programador'}
]

function verificar(){

    const nomesArray = registro.map((pessoa) => {
        return pessoa.nome
    })

    nomesArray.forEach((nomes) => {
        msg.innerHTML = nomes + ' ' + msg.innerHTML
    })
}