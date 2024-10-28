
let nomeCompleto = prompt("Digite seu nome completo:");
let contador = 0;

nomeCompleto.forEach(function(letra) {
    if (letra !== ' ') {
        contador++;
    }
});

console.log(`O seu nome possui ${contador} letras.`);