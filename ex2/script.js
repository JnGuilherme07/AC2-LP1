let numeros = [2, 5, 8, 13, 16, 21];
numeroImpar = [];

numeros.forEach(function (Pegarnumero) {
    if(Pegarnumero % 2 === 1){
    let numeroAleatorio = Math.floor(Math.random() * 10) +1
    numeroImpar.push(Pegarnumero * numeroAleatorio)
        
        
    }
    else{
        numeroImpar.push(Pegarnumero);

    }
})
    
console.log(numeroImpar);