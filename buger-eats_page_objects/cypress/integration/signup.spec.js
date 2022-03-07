////**** Aula - Padrão de nomenclatura ****////
import signup from '../pages/SignupPage' //Instancia  da página para os casos de testes

describe('Signup', () => {      /// Refatoração para inglês todos os casos de testes

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {  //pega o resultado da massa de teste. (d) argumento
            this.deliver = d  //this ter acesso a informação
        })
    })

    it('User should be deliver ', function () {
        var deliver = {

        }

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'    //// Valor constante que não vai mudar
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {
        var deliver = {

        }

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShoudBe('Oops! CPF inválido')

    })
})