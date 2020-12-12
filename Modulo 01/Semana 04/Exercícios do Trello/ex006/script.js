const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 11, prof: 'Programador'},
    {nome: 'Carla', sexo: 'Feminino', idade: 23, prof: 'Programador'},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 15, prof: 'Programador'}
]

function verificar(){
    const menorArray = registro.filter(elem => elem.idade < 18)

    menorArray.forEach((nomes) => {
        msg.innerHTML = nomes.nome + ' ' + msg.innerHTML
    })
}