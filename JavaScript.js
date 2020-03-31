let amount = 0; // let eller var?

function changeAmount(operator){
    if (operator === '-' && amount > 0){
        amount--  
    }
    if (operator === '+') {
        amount++
    }

    document.getElementById("amount").innerText = amount // Fråga Oscar om innerText.
}
