// Inicio
if (localStorage.tarefasSalvas == undefined) { // Verifica se exite alguma lista de tarefas no LS
    iniciarLS()
} else {
    let listaTarefas = JSON.parse(localStorage['tarefasSalvas'])
    if (listaTarefas.length > 0) { // Caso a lista encontrada tenha alguma tarefa cadastrada, pergunta para o úsuario se deseja manter
        let apagarListas = window.confirm('Você deseja carregar a lista salva?')

        if (apagarListas){
            localStorage.setItem('totalTarefas',1)
            for (let t in listaTarefas){
                criarLinhas(listaTarefas[t],'sim')
            }
        } else {
            iniciarLS()
        }
    }
}

//Funções
function iniciarLS(){
    // Configuração do LS
    let listaTarefas = []
    let tarefasCheck = []
    localStorage["tarefasSalvas"] = JSON.stringify(listaTarefas) //Será salvo as tarefas
    localStorage["tarefasConcluidas"] = JSON.stringify(tarefasCheck) //Será salvo se a tarefa já foi concluida
    localStorage.setItem('totalTarefas',1) //Apenas um marcador
}

function adicionar(){
    let texto = window.document.querySelector('input#textoentrada')

    if (texto.value == ''){return window.alert('[ERRO] É necessário informar uma tarefa!')}

    criarLinhas(texto.value)

    texto.value = ''
}

function criarLinhas(valorTexto,recarregar){
    /* Função responsavel por criar as listas de novas tarefas ou tarefas cadastradas no LS
    valorTexto = pode conter uma entrada a partir do botão de adicionar tarefa ou carregar o valor do LS (tarefasSalvas)
    recarregar = Só é usada caso esteja carregando uma lista já salva
    */

    if (localStorage.totalTarefas == undefined) { //Define aonde o marcador deve começar para não haver conflito dos Id's
        localStorage.setItem('totalTarefas',1)
    } else {
        let vLS = Number(localStorage.totalTarefas)
        vLS++
        localStorage.setItem('totalTarefas',vLS)
    }

    // Define os valores dos textos
    let tarefaTexto = document.createTextNode(valorTexto)
    let tarefaBotao = document.createTextNode('X')

    // Define os ids para os novos campos
    let vLinha = 'div' + localStorage.totalTarefas
    let vLabel = 'lb' + localStorage.totalTarefas

    //Configura a DIV que vai carregar o checkbox, o paragrafo e o botão
    let linha = document.createElement('div')
    linha.setAttribute('class', 'tarefa')
    linha.setAttribute('id', vLinha)

    //Configura o campo de check
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id', 'ch'+ vLabel)
    check.onclick = function (){realizado(vLabel)}
    if (recarregar == 'sim') { //Serve para carregar tarefas completas, apenas no caso da página estar carregando a lista salvada
        let listaTarefas = JSON.parse(localStorage['tarefasSalvas'])
        let tarefasCheck = JSON.parse(localStorage['tarefasConcluidas'])

        for (let n = 0; n < listaTarefas.length;n++){
            if (listaTarefas[n] == valorTexto){
                if (tarefasCheck[n] == 'true'){
                    check.setAttribute('checked', 'checked')
                }
            }
        }
    }

    //Cofigura o paragrafo
    let tarefa = document.createElement('p')
    tarefa.setAttribute('id', vLabel)
    tarefa.setAttribute('title', valorTexto)
    tarefa.onclick = function (){exibirTarefa(vLabel)}
    tarefa.appendChild(tarefaTexto)

    //Configura botão para remover a tarefa
    let botao = document.createElement('button')
    botao.setAttribute('title', 'Excluir tarefa')
    botao.onclick = function (){excluir(vLinha,vLabel)}
    botao.appendChild(tarefaBotao)

    //Criação das TAG's
    let tarefas = window.document.querySelector('section#tarefas')
  
    tarefas.appendChild(linha) // Cria DIV

    linha.appendChild(check) //Cria checkbox
    linha.appendChild(tarefa) //Cria paragrafo
    linha.appendChild(botao) //Cria botão

    if (recarregar != 'sim'){ //Caso for uma entrada a partir do botão de criação, nessa parte ele cadastra a tarefa no LS
        let listaTarefas = []
        let ltarefas = JSON.parse(localStorage['tarefasSalvas'])

        for (let n in ltarefas){listaTarefas.push(ltarefas[n])} //Carrega os valores já cadastrados

        // Adiciona valor da tarefa nova e salva tudo no LS
        listaTarefas.push(valorTexto) 
        localStorage["tarefasSalvas"] = JSON.stringify(listaTarefas)

        //Inclui nova marcação para o check da nova tarefa, sempre vai ser falso, poís é necessario o usuario marcar o check
        let tarefasCheck = JSON.parse(localStorage['tarefasConcluidas'])
        tarefasCheck.push('false')
        localStorage["tarefasConcluidas"] = JSON.stringify(tarefasCheck)
    } else {
        //Configura o paragrafo dependendo do cadastro do check
        realizado(vLabel)
    }
}

function realizado(tarefa){
    //Altera o estilo do paragrafo 
    let feito = window.document.querySelector('input#' + 'ch' + tarefa)
    let vtarefa = window.document.querySelector('p#' + tarefa)
    let auxiliar = false


    if (feito.checked == true){ //Verifica se o checkbox está marcado
        vtarefa.style = "text-decoration: line-through 4px"
        auxiliar = true
    } else {
        vtarefa.style = "text-decoration: none"
        auxiliar = false
    }

    // Parte responsavel por cadastrar quais tarefas estão marcadas
    let listaTarefas = JSON.parse(localStorage['tarefasSalvas'])
    let tarefasCheck = JSON.parse(localStorage['tarefasConcluidas'])
    let auxiliarTarefa = []

    for (let n = 0; n < listaTarefas.length;n++){ //Anda por todas as tarefas cadastradas
        if (listaTarefas[n] == vtarefa.innerHTML){// se for a tarefa selecionada pelo usuario, a partir da variavel auxiliar, cadastra ação
            if (auxiliar) {
                auxiliarTarefa.push('true')
            } else {
                auxiliarTarefa.push('false')
            }
        } else {
            auxiliarTarefa.push(tarefasCheck[n]) // Demais tarefas só replica o valor já cadastrado no LS
        }
    }
    //Sobrepoem cadastro
    localStorage["tarefasConcluidas"] = JSON.stringify(auxiliarTarefa)
}

function excluir(linha,vLinha){
    //Exclui a tarefa selecionada
    let vTarefa = window.document.querySelector('p#' + vLinha)

    let escolha = window.confirm(`Você tem certeza que deseja remover a tarefa ${vTarefa.innerHTML}?`)

    if (escolha) {//Se a resposta for possitiva, mante rotina
        let tarefa = window.document.querySelector('div#' + linha)

        tarefa.parentNode.removeChild(tarefa)

        //Remove tarefa do cadastro LS
        let listaTarefas = JSON.parse(localStorage['tarefasSalvas'])
        let tarefasCheck = JSON.parse(localStorage['tarefasConcluidas'])

        for (let n in listaTarefas){
            if (listaTarefas[n] == vTarefa.innerHTML){
                listaTarefas.splice(n,1)
                tarefasCheck.splice(n,1)

                localStorage.setItem('tarefasSalvas',JSON.stringify(listaTarefas))
                localStorage.setItem('tarefasConcluidas',JSON.stringify(tarefasCheck))
                return
            }
        }
    }
}

function exibirTarefa(tarefa) {
    // Caso a tarefa for muito grande, existe a possibilidade do usuario verificar o texto completo da tarefa
    let vtarefa = window.document.querySelector('p#' + tarefa)
    window.alert(vtarefa.innerHTML)
}   
