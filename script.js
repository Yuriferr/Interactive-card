function gettingValue(){
    var inputCardNumber = document.getElementById('input-cardNumber').value 
    if(inputCardNumber != ''){
        document.getElementById('card-number').innerHTML = inputCardNumber
    }

    var inputCardName = document.getElementById('input-cardName').value
    if(inputCardName != ''){
        document.getElementById('card-name').innerHTML = inputCardName
    }

    var inputCardMM = document.getElementById('input-mm').value
    if(inputCardMM != ''){
        document.getElementById('card-mm').innerHTML = inputCardMM
    }

    var inputCardYY = document.getElementById('input-yy').value
    if(inputCardYY != ''){
        document.getElementById('card-yy').innerHTML = inputCardYY
    }

    var inputCardCVC = document.getElementById('input-cvc').value
    if(inputCardCVC != ''){
        document.getElementById('card-cvc').innerHTML = inputCardCVC
    }
}

