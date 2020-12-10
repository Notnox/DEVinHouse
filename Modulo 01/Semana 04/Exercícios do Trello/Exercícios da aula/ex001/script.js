function recebeVar(numeros){

    var origem = 10
    for (var i = 0; i < numeros.length; i++){
        if (i < numeros.length - 1){
            var soma = numeros[i] + numeros[i + 1]
            console.log('i ', numeros[i] + numeros[i + 1])
        }
    }

    var resultado = origem + soma
    console.log('soma ', soma)
    console.log('resultado ', resultado)
}

function recebeLet(numeros){

    let origem = 10
    for (let i = 0; i < numeros.length; i++){
        if (i < numeros.length - 1){
            let soma = numeros[i] + numeros[i + 1]
            console.log('i ', numeros[i] + numeros[i + 1])
        }
    }

    let resultado = origem + soma
    console.log('soma ', soma)
    console.log('resultado ', resultado)
}

recebeVar([1,2,3])
recebeLet([1,2,3])
