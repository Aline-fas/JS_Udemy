let inputArray = []; // criando um array para armazenar as tentativas
let inputBox = document.querySelector('#inputBox') //Numero digitado pelo usuario
let display = document.querySelector('#guesses') // spam onde irei exibir os numeros chutados
let dica = document.querySelector('#dica')

//Gerando um numero de 0 a 100 e mostrando no console
let number = Math.floor(Math.random() * 100 + 1)
console.log(number)


function getNumber(){
    let inputValue = inputBox.value
    
    //verificando se o usuario digitou um valor entre 1 e 100
    if(inputValue > 100 || inputValue < 1 ){
        dica.innerHTML = '<span id="red">Escolha um número entre 1 e 100</span>'
    }else {

         //Guardando os numeros digitados pelo usuario
        if (inputArray.length < 3 ){// se o tamanho do array for menor que 3 ...
            
            inputArray.push(inputValue)
            inputValue = ""
            display()
        }else {
            dica.innerHTML = '<span id="red">Você tem apenas 3 tentativas</span>'
        }
    }
}

 //percorrendo o array para exibir os numeros digitados pelo usuario
 function display() {
     let list = "";
     let c = 0; 


     for (let i = 0; i < inputArray.length; i++) {
        c++;
        document.querySelector('#attempts').innerHTML = c
         list += inputArray[i] + " ";
        
        if (inputArray[i] > number){
            dica.innerHTML ='Chutou alto'
        }else if (inputArray[i] < number){
            dica.innerHTML ='Chutou baixo'
            }else{
                dica.innerHTML ='ACERTÔ PORRA'
            }
        }
        display.innerHTML = list;
  }