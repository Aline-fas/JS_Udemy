//aplicação para verificar o preço do produto cadastrado e aprovar ou reprovar o cadastro

//prompt serve para o usuario digitar no browser
//number é para forçar que o prompt só receba numeros e não strings
let value = Number(prompt('Enter the product value: '))

// typeof verifica o tipo da variavel (bool, number, string...)
console.log(typeof(value))

if (value < 20){
    //vai ate o documento, pega o id result, e insere uma frase atravez do innerHTML
    document.getElementById('result').innerHTML = 'Produto reprovado'
}else{
    document.getElementById('result').innerHTML = 'Produto aprovado'
}
