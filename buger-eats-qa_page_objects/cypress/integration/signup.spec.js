////**** Aula - Padrão de nomenclatura ****////
import signupPage from '../pages/SignupPage' //Instancia  da página para os casos de testes
import signupFactory from '../factories/SignupFactory' // importando o módulo

describe('Signup', () => {      /// Refatoração para inglês todos os casos de testes

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {  //pega o resultado da massa de teste. (d) argumento
    //         this.deliver = d  //this ter acesso a informação
    //     })
    // })

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
})