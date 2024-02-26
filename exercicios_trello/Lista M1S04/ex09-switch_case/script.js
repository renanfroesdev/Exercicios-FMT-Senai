let entrada = prompt('Digite um produto. Temos [Banana, Laranja e Morango]')

switch (entrada.toLocaleLowerCase()){
    case 'banana':
        console.log('A Banana custa R$ 3,99KG')
        break;
    case 'laranja':
        console.log('A Laranja custa R$5,99KG')
        break;
    case 'morango':
        console.log('O Morango custa R$ 8,00 a unidade')
        break;
    default:
        alert("PRODUTO NÃO CADASTRADO")
}