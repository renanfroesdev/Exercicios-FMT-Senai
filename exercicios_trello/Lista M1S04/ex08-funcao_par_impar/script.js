// Lista de Exercícios do Trello - Aluno: Renan dos Santos
// Exercicio 8 - Implemente uma função que determine se um número é par ou ímpar.

function verificador() {
    num = parseInt(prompt('Digite um número: '))
    if (num % 2 == 0) {
        console.log(`O Número ${num}, é par`)
    }else {
        console.log(`O Número ${num}, é Ímpar`)
    }
}