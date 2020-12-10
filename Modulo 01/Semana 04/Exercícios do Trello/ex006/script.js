const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 11, prof: 'Programador'},
    {nome: 'Carla', sexo: 'Feminino', idade: 23, prof: 'Programador'},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 15, prof: 'Programador'}
]

function verificar(){

    const nomesArray = registro.map((pessoa) => {
        if (pessoa.idade <= 18) {
            return pessoa.nome
        } else {
            return 'maior'
        }
    })

    nomesArray.forEach((nomes) => {
        if (nomes != 'maior') {
            msg.innerHTML = nomes + ' ' + msg.innerHTML
        }
    })
}