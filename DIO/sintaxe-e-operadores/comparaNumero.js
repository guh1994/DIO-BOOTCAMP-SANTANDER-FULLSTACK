function comparacao(num1,num2){
    const validaIgual = validaIguais(num1,num2);
    const comparePlusAndLess = comparaMaiorMenor(num1,num2);
    if(validaIgual == true){
        return num1 + " e " + num2 + " são iguais. E "+ comparePlusAndLess;
    }else if(validaIgual == false ){
        return  num1 + " e " + num2 + " não são iguais. E "+ comparePlusAndLess;
    }
}


function comparaMaiorMenor(num1, num2){
    const soma = num1+num2;
    let compara10 = 'menor';
    let compara20 = 'menor'
  if(soma > 10){
    compara10 = 'maior';
  }
  if (soma > 20){
    compara20 = 'maior';
  }

  return "Sua soma é " + soma + " que é " + compara10 + " do que 10 e " + compara20 + " do que 20";

}

function validaIguais(num1,num2){
    if(num1 === num2){
        return true;
    }else{
        return false;
    }
}
console.log(comparacao(11,11))