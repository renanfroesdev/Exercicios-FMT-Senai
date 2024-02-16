function verificador() {
    let idade = parseInt(prompt('Digite sua idade: '))
    if (idade >=18){
        alert('Maior de idade')
        console.log('Maior de idade')
    } else if (idade >= 0 && idade <18){
        alert('Menor de idade')
        console.log('Menor de idade')
    } else {
        alert('Idade incorreta')
        console.log('Idade incorreta')
    }
}
