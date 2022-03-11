////**** Aula - Padrão de nomenclatura ****////
import signupPage from '../pages/SignupPage' //Instancia  da página para os casos de testes
import signupFactory from '../factories/SignupFactory' // importando o módulo

describe('Signup', () => {      /// Refatoração para inglês todos os casos de testes

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {  //pega o resultado da massa de teste. (d) argumento
    //         this.deliver = d  //this ter acesso a informação
    //     })
    // })

    //it.skip('') ele pula um dos testes para testar depois
    it('User should be deliver ', function () {

        var deliver = signupFactory.deliver()  // vai criar a massa de teste

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'    //// Valor constante que não vai mudar
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()  // vai criar a massa de teste

        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShoudBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()  // vai criar a massa de teste

        deliver.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShoudBe('Oops! Email com formato inválido.')

    })

    it('Require fields', function () {
        signupPage.go()
        signupPage.submit()
        signupPage.alertMessageShoudBe('É necessário informar o nome')
        signupPage.alertMessageShoudBe('É necessário informar o CPF')
        signupPage.alertMessageShoudBe('É necessário informar o email')
        signupPage.alertMessageShoudBe('É necessário informar o CEP')
        signupPage.alertMessageShoudBe('É necessário informar o número do endereço')
        signupPage.alertMessageShoudBe('Selecione o método de entrega')
        signupPage.alertMessageShoudBe('Adicione uma foto da sua CNH')

    })

    
})