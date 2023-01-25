function pulaLinha(){
    console.log(' ')
}

//OPERADORES ARITMETICOS

num1 = 3 
num2 = 2 

console.log('soma: ' + (num1 + num2))
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2) // resto da divisao
console.log('exponencial: ' + (num1** num2)) //exponencial (3x3)

pulaLinha()

//INCREMENTO E DECREMENTO
total = num1 + num2
console.log(total) //5

//PRE DECREMENTO (soma e mostra a operação)
console.log(--total)
console.log(++total) 

//POS DECREMENTO (soma, mas so mostra quando chamada novamente)
console.log(total++)
console.log(total)
console.log(total--)
console.log(total)

pulaLinha()

//OPERADORES DE COMPARAÇÃO <>!=...

num = 3

// console.log(num > 0)
// console.log(num < 0)
// console.log(num >= 3)
// console.log(num <= 3)
console.log(num === 3) // exatamente igual
console.log(num !== 3) //nao igual

// === mesmo tipo e mesmo valor
// == mesmo valor

pulaLinha()

//OPERADOR TERNARIO 

motorista = 80
velocidade =  motorista > 110 ? 'ACIMA' : 'ABAIXO'

console.log(velocidade)
pulaLinha()

//OPERADORES LOGICOS 
// && || !

idade = 19
naturalidade = 'brasileiro'

podeVotar = idade >= 18 && naturalidade === 'brasileiro' ? true : false


console.log('Pode votar: ' + podeVotar)
podeViajar = !podeVotar ? 'sim' : 'não'
console.log('Pode viajar: ' + podeViajar)

pulaLinha()
//IF ELSE 

velocidade = 60

if (velocidade > 110){
    console.log('Acima do limite de velocidade')
}else if (velocidade >= 40 && velocidade <= 110){
    console.log('Dentro da velocidade permitida')
}else {
    console.log('Velocidade baixa demais')
}


pulaLinha()
//SWITCH CASE

airport = 'JFK'

switch (airport){
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknown')
}
pulaLinha()

//FOR 

for (i = 0; i <= 5; i++){
    console.log('Número ', i)
    // console.log('Número ' + i)
}


pulaLinha()
//WHILE 

c = 1

while( c <= 5){
    console.log('Número ' + c)
    c++
}

//DICA: for cria a variavel dentro do loop, while usa uma variavel ja criada anteriormente no programa.

pulaLinha()

//DO

a = 5

do{
    console.log(a)
    a++
}while(a < 8)

pulaLinha()


//FOR IN LOOP

const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

pulaLinha()

for (let i in myCar) // percorrendo os indices e mostrando os conteudos
    console.log(i, myCar[i])


pulaLinha()

//FOR OF LOOP

const friends = ['Marcos', 'Ana', 'José']

for(let i of friends) //exibindo o conteudo
    console.log(i)



pulaLinha()

// BREAK

i = 5
while(i<=10){
    console.log('Número: '+ i)
    i++
    if(i > 8 ) break
}
pulaLinha()