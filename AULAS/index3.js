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


//reutilizando a factory
book2 = createBook('Think','Napolean',400)
console.log(book2)

book2.bookColor = 'white' // adicionando uma propriedade a apenas um obj 
console.log(book2)

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