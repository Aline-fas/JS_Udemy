
function update(){

    let bill = Number(document.getElementById('yourBill').value)
    let percent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)

    // console.log({bill, percent, split})

    let totalSplit = bill * percent / 100 // total de gorjeta
    let total = bill + totalSplit // total da conta com gorjeta
    let individual = total / split // quanto cada pessoa vai pagar

    // console.log({individual})

    document.getElementById('tipPercent').innerHTML = percent +'%' // alterando o percent da barrinha dinamicamente
    document.getElementById('tipValue').innerHTML=totalSplit
    document.getElementById('totalWithTip').innerHTML = total
    document.getElementById('splitValue').innerHTML=split
    document.getElementById('billEach').innerHTML = individual

}