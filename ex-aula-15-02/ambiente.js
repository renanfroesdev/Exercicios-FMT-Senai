let continua = true
while (continua) {
    let alimento = prompt('Digite o nome do alimento, ou sair para encerrar')
    switch (alimento.toLowerCase()) {
        case 'morango':
        case '1':
            alert('O preço é R$5,99')
            break;
        case 'laranja':
        case '2':
            alert('O preço é R$2,99')
            break;
        case 'banana':
        case '3':
            alert('O preço é R$3,99')
            break;
        case 'sair':
        case '0':
            alert('Programa ENCERRADO')
            continua = false
            break
        default:
            alert('produto não cadastrado')
        }
    }
