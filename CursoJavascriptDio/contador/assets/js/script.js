var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonLess = document.getElementsByName('subtrair')[0];


function validNumbers(){
    if(currentNumber === 0){
        buttonLess.disabled = true;
    }if(currentNumber <=10){
        buttonLess.disabled = false;
    }
}

function increment(){
    validNumbers();
    if(currentNumber === 0 || currentNumber < 10){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        alert("Não é possivel incrementar");
    }
}

function decrement(){
    if(currentNumber > 0 && currentNumber <= 10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        }
        else{
            alert("Não é possivel subtrair");
        }
}