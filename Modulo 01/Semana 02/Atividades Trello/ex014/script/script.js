localStorage.clear()
var cursosOfertado = [9]
cursosOfertado[0] = "HTML5"
cursosOfertado[1] = "CSS3"
cursosOfertado[2] = "JS"
cursosOfertado[3] = "Java"
cursosOfertado[4] = "Python"
cursosOfertado[5] = "Ruby"
cursosOfertado[6] = "SQL"
cursosOfertado[7] = "MySQL"
cursosOfertado[8] = "PHP"
cursosOfertado[9] = "React"

function adicionarBotao(opcao){
    
    if (opcao == undefined){
        var cursoBusca = window.document.querySelector('input#buscar')
        var lista = window.document.querySelector('select#carrinho')
    } else {
        parent.window.document.querySelector('input#buscar').value = opcao
        var cursoBusca = parent.window.document.querySelector('input#buscar')
        var lista = parent.window.document.querySelector('select#carrinho')
    }

    if (cursoBusca.value != ''){
        if (verificarConflito(cursoBusca.value)){
            for (let n = 0; n != cursosOfertado.length; n++){
                if (cursoBusca.value == cursosOfertado[n]){
                    let item = window.document.createElement('option')
                    
                    adicionarNoStore(cursoBusca.value)
    
                    item.text = `Curso de ${cursoBusca.value}.`
    
                    lista.appendChild(item)
                    cursoBusca.value = ''
                    return
                }
            }
            window.alert('[ERRO] No momendo não estamos ofertando esse curso, tente outro.')
            cursoBusca.value = ''
        } else {
            window.alert('[ERRO] Esse curso já foi adicionado ao carrinho!')
            cursoBusca.value = ''
        }
    } else {
        window.alert('[ERRO] É necessário informar algum curso para adicionar ao carrinho!')
    }
}

//DAQUI PARA BAIXO, EU NÃO ME ORGULHO NEM UM POUCO

function verificarConflito(stg){
    if (localStorage.curso0 == stg){
        return false
    } else if (localStorage.curso1 == stg){
        return false
    } else if (localStorage.curso2 == stg){
        return false
    } else if (localStorage.curso3 == stg){
        return false
    } else if (localStorage.curso4 == stg){
        return false
    } else if (localStorage.curso5 == stg){
        return false
    } else if (localStorage.curso6 == stg){
        return false
    } else if (localStorage.curso7 == stg){
        return false
    } else if (localStorage.curso8 == stg){
        return false
    } else if (localStorage.curso9 == stg){
        return false
    } else {
        return true
    }
}

function adicionarNoStore(stg){
    if (localStorage.curso0 == undefined){
        localStorage.setItem('curso0',stg)
    } else if (localStorage.curso1 == undefined){
        localStorage.setItem('curso1',stg)
    } else if (localStorage.curso2 == undefined){
        localStorage.setItem('curso2',stg)
    } else if (localStorage.curso3 == undefined){
        localStorage.setItem('curso3',stg)
    } else if (localStorage.curso4 == undefined){
        localStorage.setItem('curso4',stg)
    } else if (localStorage.curso5 == undefined){
        localStorage.setItem('curso5',stg)
    } else if (localStorage.curso6 == undefined){
        localStorage.setItem('curso6',stg)
    } else if (localStorage.curso7 == undefined){
        localStorage.setItem('curso7',stg)
    } else if (localStorage.curso8 == undefined){
        localStorage.setItem('curso8',stg)
    } else if (localStorage.curso9 == undefined){
        localStorage.setItem('curso9',stg)
    }
}