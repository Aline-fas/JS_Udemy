function pulaLinha(){
    console.log(' ')
}

//ARRAY

let friends = ['leticia','julia','marcos']
friends[1]= 'carlos' // alterando a informação do indice
console.log(friends)
console.log(friends[0]) // exibindo apenas o indice 0
 
pulaLinha()

//ADICIONANDO VALORES NUM ARRAY

const numbers = [7, 8, 9]
console.log(numbers)

numbers.unshift(1, 2, 3) // adicionando no inicio do array
console.log(numbers)

numbers.push(10, 11, 12) //adicionando no final do array
console.log(numbers)

numbers.splice(3, 0, 4, 5, 6) // adiciona no meio
// 3 representa o meu indice de partida ( a partir do indice 3 eu estou adicionando...)
//0 significa que eu nao quero excluir nenhuma informação dali pra frente ( se quisesse, escreveria a quantidade de indices a excluir)
console.log(numbers)

pulaLinha()

//LOCALIZANDO ITENS EM UMA ARRAY PRIMITIVA

let num = [6, 7, 8]

// ele me diz exatamente em qual indice esta localizado o numero que eu enviei
console.log(num.indexOf(8)) 
console.log(num.indexOf(2))
// resultado -1 seria o mesmo q false ou nao

//me diz se o numero esta ou nao presente 
console.log(num.includes(7))
console.log(num.includes(5))

pulaLinha()

//LOCALIZANDO ITENS EM UMA ARRAY DE REFERENCIA 

const movies = [
    {id: 1, movieName: 'As Branquelas'},
    {id: 2, movieName: 'Matrix'},
    {id: 3, movieName: 'A Origem'}
]
// .find só funciona com uma função
//console.log(movies.includes)... nao funciona pra referencia

console.log(movies.find(function(movie){ // criando uma função para procurar algo dentro e retornar o valor da procura
    //criei uma funcao que chama movie e retorna o movie.movieName se for igual a 'Matrix'
    return movie.movieName == 'Matrix'
})) 

//ARROW FUNCTION 
//faz o mesmo trabalho de da function, só q escreve menos codigo
//pare encurtar e simplificar a sintaxe


//movie1 esta dentro de movieName e la dentro existe 'As Branquelas'
console.log(movies.find(moovie1 => moovie1.movieName == 'As Branquelas'))

pulaLinha()

//REMOVENDO ITENS DA ARRAY
// para remover no inicio usa shift, no final usa pop, no meio usa splice

let numeros = [2, 5, 7, 9, 14, 19, 21, 74]
console.log(numeros)

const final =  numeros.pop() // criando varivel e tirando o ultimo item do array
console.log(numeros)
console.log(final) // exibindo qual numero ela tirou
// outra forma de retirar o ultimo item : console.log(numeros.pop())

pulaLinha()

console.log(numeros.shift()) // removeu o primeiro item do array sem criar variavel
// outra forma de escrever :  const final = numeros.shift()
console.log(numeros)

pulaLinha()

final1 =  numeros.splice(3,2) //o parametro que eu defini foi: partir do indice 3 remova os proximos 2 indices 

console.log(final1) //exibindo o(s) numero(s) que eu exclui
console.log(numeros) // exibindo o array apos a exclusao

pulaLinha()

//ESVAZIANDO UM ARRAY 

//numeros = [] //  pode fazer assim se nao for uma const
//  outra forma de esvaziar : numeros.length = 0 length se refere ao tamanho total do array

// console.log(numeros)

numeros.splice(0,numeros.length) // excluindo do indice 0 ate o length (tamanho total do array)
console.log(numeros)

pulaLinha()

// CONCATENANDO UM ARRAY

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let letters = ['a', 'b', 'c', 'd', 'i', 'f', 'g','h','i', 'j']

all = numero.concat(letters)//criei all e coloquei letters dentro de numero 

console.log(all)

//usando slice para criar uma variavel utilizando alguns elementos de outra variavel
metade =  all.slice(9,11) // a partir do index 9 de 'all' ate antes do indice 11 de all
console.log(metade)

pulaLinha()

//JOIN ARRAY
//adicionando qualquer coisa a uma array
//join converte o array em string 

clientes = ['marcela', 'jose', 'bernardo', 'joao', 'olivia','andre']

console.log(clientes)

clientesJoin = clientes.join(', ') // entre parenteses coloco o que quero adicionar 
console.log(clientesJoin)

pulaLinha()

//REVERTENDO UM ARRAY

clientes.sort() //  organiza de forma alfabetica os itens do array
console.log(clientes)

clientes.reverse() //mostra o inverso do que estava (contrario)
console.log(clientes)

pulaLinha()

//VERIFICANDO OS ELEMENTOS DE UM ARRAY 

// every (todos) checa todos os valores dentro do array
//checando se os itens sao maiores ou menores que zero
//retorna true or false

tempLondon = [ 17, 13, 8, 2, 0, -1]

//temoPositive foi na tempLondon e verificou se cada item era >=0 e retornou true
tempPositive = tempLondon.every(function(value){
    return value >= 0 
})

console.log(tempPositive)

    //abaixo eu fiz usando arrow function para encurtar/facilitar o codigo

    // tempPositive = tempLondon.every(value=>value >= 0)
    
    // console.log(tempPositive)
    
    pulaLinha()

//FILTRANDO UM ARRAY COM FILTER 
//me mostra o resultado

// tempNegative = tempLondon.filter(function(value1){ //fiz com function
//     return value1 <= 0
// })
tempNegative = tempLondon.filter(value1 => value1 <=0) //fiz com arrow function 

console.log(tempNegative)