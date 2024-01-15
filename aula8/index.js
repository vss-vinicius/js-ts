/*
    Vinicius Soares Santos tem 23 anos, pesa 79 kg
    tem 1.7 de altura e seu IMC é de 27.33564013840831
    Vinicius Soares nasceu em 2000
*/

const nome = 'Vinicius Soares';
const sobrenome = 'Santos';
const idade = 23;
const peso = 79;
const alturaEmM = 1.70;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // "peso / (altura * altura)"
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)

console.log(`${nome} nasceu em ${anoNascimento}`)