// Lista de Exercícios do Trello - Aluno: Renan dos Santos
// Exercicio 7 - Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma 
// mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function cumprimentar(){
    let hora = parseInt(prompt('Digite uma hora:'))

    if (hora < 12 && hora >= 0){
        console.log(`São ${hora} horas, Bom Dia!`)
    } else if (hora < 18){
        console.log(`São ${hora} horas, Boa Tarde!`)
    } else {
        console.log(`São ${hora} horas, Boa Noite`)
    }
}