
function imprimirFibonacci(valNum) {
    valNum = parseInt(valNum);
     let a = 0;
     let b = 1;
     let n = 1;
     let f;
     let numeros = [];
     if (Number.isInteger(valNum) && valNum.length !== 0) {
        for (let i = 0; i < valNum; i++) {
            f=a+b;
            numeros[i]=a;
            a=b;
            b=f;
            document.getElementById("outputFibonacci").innerHTML = (numeros);
            } 
      }else if(valNum == 0){
        document.getElementById("outputFibonacci").innerHTML = " "
      }
      else{
        document.getElementById("outputFibonacci").innerHTML = "Por favor, ingresa un número."
      }
    
}