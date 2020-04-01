let amount = 0; // let eller var?

function changeAmount(operator) {
    if (operator === '-' && amount > 0) {
        amount--        
    }
    if (operator === '+') {
        amount++
    }
    document.getElementById("amount").innerText = amount // Fråga Oscar om innerText.
    // "amount" är objektet vi hämtat från html-dokumentet. .innerText gör att det som står där (i detta fall 0) ersätts med det vi har satt till vårt objekt.
    // Nu sätter vi elementet i html-dokumentet med id "amount" till variabeln amount, som har ändrats i funktionen.
}

let red = false;
function changePicture() {
    if (!red){
        document.getElementById("sBox").style.backgroundColor = "red" 
        red = true;
    }else{
        document.getElementById("sBox").style.backgroundColor = "white" 
        red = false;
    }
}

let amount2 = 0;
let newPrice = 0;
// let itemPrice = 30;

function changeAmount2(operator, inputPrice) {
    let itemPrice = parseFloat(inputPrice)
    if (operator === '+') {
        amount2++
        newPrice += itemPrice
    }
    if (operator === '-' && amount2 > 0) {
        amount2--
        newPrice -= itemPrice
    }
    document.getElementById("amount2").innerText = amount2
    document.getElementById("price").innerText = newPrice
    
}
