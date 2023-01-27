function pulaLinha(){
    console.log('')
}

//FUNCTION DECLARATION
//os proximos 3 exemplos de funções fazem a mesma coisa

function movie(){
    console.log('Matrix')
}
movie()

//FUNCTION EXPRESSION
//criando function sem nome e assiciando a uma var

const car = function(){
    console.log('Tesla')
}
car()

//tambem posso assosiar essa variavel a outra variavel

let veiculo = car

veiculo()

function soma(a,b){
    return a + b
}
console.log(soma(5,4))


// na function abaixo o usuario pode passar um numero ilimitado de valores para somar 

function somaDinamica(){
    let total = 0
    for (let value of arguments){ 
    //para o valor de argumentos
        total += value 
    }
    return total
}

//value é o valor recebido pelo usuario
console.log(somaDinamica(20,50,10))

function financiamento(preco, taxa, anos){
    total = (preco * taxa / 100 * anos) + preco

    return total
}

console.log(financiamento(20000,18,5))