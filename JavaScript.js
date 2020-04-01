// let eller var? I detta fall spelar det ingen roll, båda lever utanför funktionen. I en for-loop lever let bara inuti loopen,
// medan var lever i hela funktionen.
let amount = 0; 

function changeAmount(operator) {
    if (operator === '-' && amount > 0) {
        amount--        
    }
    if (operator === '+') {
        amount++
    }
    document.getElementById("amount").innerText = amount 
    // "amount" är objektet vi hämtat från html-dokumentet. .innerText gör att det som står där (i detta fall 0) ersätts med det vi har satt till vårt objekt.
    // Nu sätter vi elementet i html-dokumentet med id "amount" till variabeln amount, som har ändrats i funktionen.
}

let red = false;
function changePicture() {
    if (!red){
        document.getElementById("heart").src = "HeartFull.jpg"
        red = true;
    }else{
        document.getElementById("heart").src = "Heart.jpg"
        red = false;
    }
}

function changeAmount2(operator, inputPrice, amount, sumPrice, totalAmount) {
    let itemPrice = parseFloat(inputPrice)
    let amountB = parseFloat(document.getElementById(amount).innerText)
    let newPrice = parseFloat(document.getElementById(sumPrice).innerText)
    let newPriceTotal = parseFloat(document.getElementById(totalAmount).innerText)

    if (operator === '+') {
        amountB++
        newPrice += itemPrice
        newPriceTotal += itemPrice
    }
    if (operator === '-' && amountB > 0) {
        amountB--
        newPrice -= itemPrice
        newPriceTotal -= itemPrice
    }
    document.getElementById(amount).innerText = amountB
    document.getElementById(sumPrice).innerText = newPrice
    document.getElementById(totalAmount).innerText = newPriceTotal    
}

function swap(){
    // Om man gör detta som är utkommenterat, med .innerHTML, byter hela dropdown-menyn plats, inte bara de enskilda värdena.

    // let temp = document.getElementById("fromCity").innerHTML;
    // document.getElementById("fromCity").innerHTML = document.getElementById("toCity").innerHTML
    // document.getElementById("toCity").innerHTML = temp

    let temp = document.getElementById("fromCity").value;
    document.getElementById("fromCity").value = document.getElementById("toCity").value
    document.getElementById("toCity").value = temp

}