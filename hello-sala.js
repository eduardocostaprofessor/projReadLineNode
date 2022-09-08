//módulo de leitura de console para o node
const rdSync = require("readline-sync");

let nome = rdSync.question("Qual eh o seu nome? ");

console.log(`Boa noite ${nome}!`);