let cursos = []
localStorage["cursos"] = JSON.stringify(cursos)

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

function verificarConflito(stg){
    let lscursos = JSON.parse(localStorage['cursos'])
    for (let n in lscursos){
        if (lscursos[n] == stg){
            return false
        }
    }
    return true
}

function adicionarNoStore(stg){
    let cursos = []
    let lscursos = JSON.parse(localStorage['cursos'])
    for (let n in lscursos){
        cursos.push(lscursos[n])
    }
    cursos.push(stg)
    localStorage["cursos"] = JSON.stringify(cursos)
}
