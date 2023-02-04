
const colors = ['Red', 'Blue', 'Yellow','Purple','Green', 'Pink', 'Orange']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
// querySelector serve para selecionar um elemento HTML na página usando uma sintaxe semelhante ao CSS


// quando o usuario clicar no btn, a funcao abaixo será executada
// tambem poderia fazer com onclick()...
btn.addEventListener('click', function(){

    let randomColor = getRandomColor() //se eu só chamar a função, nao funciona. Por isso ela foi colocada dentro de uma variável
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
    // textContent tem função semelhante ao innerHTML

})
    
    function getRandomColor(){
        //Math.random gera um numero aleatorio entre 0 e 1 (ex: 0.5860884462469307)
        // entao multiplicamos o resultado pelo numero maximo que queremos (tamanho do array) e
        //Math.floor aredonda um numero para baixo 
        // length retorna o tamanho do array
        return Math.floor(Math.random() * colors.length)
    }
    
