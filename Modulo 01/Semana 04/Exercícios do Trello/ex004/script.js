const msg = document.querySelector('#msg')
const registro = [
    {nome: 'João', sexo: 'Masculino', idade: 22, prof: 'Programador'},
    {nome: 'Carla', sexo: 'Feminino', idade: 23, prof: 'Programador'},
    {nome: 'Eduarda', sexo: 'Feminino', idade: 24, prof: 'Programador'}
]

function verificar(){
    if (registro.every(profissao => profissao.prof == 'Programador')){
        msg.innerHTML = 'No registro consta que todos são programadores.'
    } else {
        msg.innerHTML = 'No registro consta que nem todos são programadores.'
    }
}