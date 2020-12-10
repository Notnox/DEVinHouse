const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 15},
    {nome: 'Carlos', sexo: 'Masculino', idade: 14},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 18}
]

function verificar(){
    if (registro.some(pessoa => pessoa.idade >= 18)){
        msg.innerHTML = 'No registro consta que alguem é maior de idade.'
    } else {
        msg.innerHTML = 'No registro todos são menores de idade.'
    }
}