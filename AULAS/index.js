console.log('Script funcionando ');

// VARIAVEIS

var firstName = 'Aline';
// let firstName = 'Aline';
let lastName = 'da Silva';

console.log(firstName); // exibindo a variavel
console.log(lastName);

let Sobrenome = 'Fernandes Amaro';
console.log(Sobrenome);
console.log(firstName, Sobrenome, lastName);

//CONSTANTES

const meuAmor = 'Vivi';
console.log(meuAmor);

// TIPOS PRIMITIVOS (number, string, undefined, null..)

let itemName = 'Caneta' //string
let itemPreco = 3 //number
let itemDisponibilidade = true //bool
let itemColor //undefined
itemPreco = null // apagar o dado da variavel

console.log(itemName)

//MOSTRANDO O TIPO 
console.log(typeof itemName)


//TIPO REFERENCIA (objeto, array, function)

//OBJETO --- agrupando as variaveis dentro de um objeto
//uma variavel mae recebendo variaveis menores

let sofa = {
  itemNome: 'Sofa',
  itemLargura: 2.20,
  itemAltura: 1.10,
  itemCor: 'marrom',
  itemLugares: 2,
  itemEstoque: true
}

console.log(sofa) //exibindo todas as propriedades do obj

sofa.itemLugares = 3 //alterando informação do obj

console.log(sofa.itemCor) // exibindo apenas 1 parametro do obj

let casa = {
  itemNome: 'AptDavid',
  itemEspaco : '48m²',
  itemBairro : 'Méier',
  itemPorteiro : false,
  itemBanheiro : 1
}


console.log(casa.itemNome)
casa.itemNome = 'APT'
console.log(casa.itemNome)
console.log(casa)

//ARRAY
//lista de itens para agrupar em uma variavel

let amigos = ['Ana', 'Diego', 'Marcos', 'Bea'] //Criando o array

console.log(amigos) // mostrando o array
console.log(amigos[1]) //exibindo apenas a posição 1

amigos [2] = 'João' //alterando um elemento da array
console.log(amigos)


//FUNÇÕES

function saleStatus(){
  console.log('Aprovado')
}

saleStatus()

//função com parâmetro e argumento

function saleSatus2(status, total){ //parâmetro
  console.log('Transação ' + status + '! Total: $' + total)
}

saleSatus2('Aprovada', 30) //argumento


function desconto(preco){
  preco = (preco *.90)
  console.log('O valor da sua compra é de ' + preco)
  
  // return preco *.90
}

desconto(200)

// console.log(desconto(100))