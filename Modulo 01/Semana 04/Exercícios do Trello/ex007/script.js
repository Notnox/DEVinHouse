const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 11, prof: 'Programador'},
    {nome: 'Carla', sexo: 'Feminino', idade: 23, prof: 'Programador'},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 21, prof: 'Programador'}
]

function verificar(){
    const primeiroMaior = registro.find(elem => elem.idade >= 18)

    msg.innerHTML = primeiroMaior.nome
}