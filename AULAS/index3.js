function pulaLinha(){
    console.log(' ')
}

//CRIANDO OBJETO DENTRO DO OBJ
//E FUNCTION DENTRO DO OBJ

let book = {
    bookTitle: 'Atomic',
    bookAutor: 'James',
    bookPages: 305,
    bookCapitulos: {
        cap1: 'fundamentos',
        cap2: '1st law'
    },
    printBook: function(){
        console.log('Printing...')
    }    
}

console.log(book)
console.log(book.printBook)
book.printBook() //exibindo o que estava dentro da variavel, sem precisar do console

// pulaLinha()


//FACTORY 
//Agrupando os objetos dentro de uma function

function createBook(name, autor, pages){ // essa factory esta criando o obj abaixo
    const book = {
        bookTitle: name,
        bookAutor: autor,
        bookPages: pages
    }
    return book
}
book1 = createBook('O silêncio','James', 450) // variavel criada usando a factory com os obj

console.log(book1) //exibindo a variavel pronta 

pulaLinha()

//reutilizando a factory
book2 = createBook('Think','Napolean',400)
console.log(book2)

book2.bookColor = 'white' // adicionando uma propriedade a apenas um obj 
console.log(book2)

pulaLinha()

//CONSTRUCTOR
//codigo mais limpo que factory
// constructor e factory servem para a mesma coisa 
// no constructor se usa a 1ª letra maiúscula

function CreateBook(name, autor, pages){ 

    //esta variavel é = a esta
    this.bookTitle = name;
    this.bookAutor = autor;
    this.bookPages = pages

    //this retorna a função automaticamente (nao precisa do return)
}
book1 = new CreateBook('O silêncio','James', 450)
console.log(book1)

pulaLinha()

//OBJ BUILT IN
//obj ja construido (consulte a lista no developer mozilla)

console.log(Math.min(14,1,22,58,63,19,08,3,11)) // mostra o valor minimo entre a sequencia

pulaLinha()

//STRING 
//usado para manipular uma sequencia de caracteres

let message = 'Hi. como vc esta?'

console.log(message.startsWith('Hi')) // verificando se a mensagem inicia com Hi
console.log(message.length)//quantidade de caracteres
console.log(message.includes('como')) //verificando se na mensagem existe..
console.log(message.endsWith('?'))// verificando se a mensagem termina com...
pulaLinha()

//TEMPLATE LITERALS
// pulando linha da maneira correta

let firstName = 'Joe'


const email = 'Hi, Joe.\nThe meeting is confirmed! \n Aline' // forma meio baguncada de pular linha
console.log(email)
const emailv = 'Hi,'+ firstName +'\nThe meeting is confirmed! \n Aline' // forma meio baguncada e como colocar var nela
console.log(emailv)

pulaLinha()

const email2 = `Hi, Joe. 
The meeting is confirmed! 
Aline` 
// forma correta (com crase vc pode pular linha ja dentro do codigo)
console.log(email2)

const email2v = `Hi, ${firstName} 
The meeting is confirmed! 
Aline` 
// forma correta (com crase vc pode pular linha ja dentro do codigo) 
//como adicionar var sem concatenar 
console.log(email2v)

//

