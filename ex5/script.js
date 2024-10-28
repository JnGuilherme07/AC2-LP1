let numerosOriginais = [4, 5, 6];
let novosNumeros = [1, 2, 3];
 
 
novosNumeros.forEach(function(numero) {
    numerosOriginais.unshift(numero);
});
 
 
console.log(numerosOriginais);