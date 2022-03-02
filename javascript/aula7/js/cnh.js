/** Usar - index7.html **/
function verificarIdade() {      //Padrão de nomeclatura camelcase "verificarIdade" minusculo e a outra palavra em maiusculo
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {  // validação  de campo obrigatório
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)


    if (idadeNum >= 18) {     //Controle de fluxo
        alert('Ok, você pode tirar sua CNH.')
    } else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto sugiro andar de bike.')
    } else {
        alert('Melhor você tomar leite....')
    }


}