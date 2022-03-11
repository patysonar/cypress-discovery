////**** Aula - Padrão de nomenclatura ****////
import signupPage from '../pages/SignupPage' //Instancia  da página para os casos de testes
import signupFactory from '../factories/SignupFactory' // importando o módulo
//import { it } from 'faker/lib/locales'


describe('Signup', () => {      /// Refatoração para inglês todos os casos de testes

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {  //pega o resultado da massa de teste. (d) argumento
    //         this.deliver = d  //this ter acesso a informação
    //     })
    // })

    //it.skip('') ele pula um dos testes para testar depois
   //Cenarios - casos de testes
    it('User should be deliver', function () {

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

    ////**** Aula - New ITs On The Block (Step by step) ****////
    // Validando campos obrigatórios
    //(Step by step) se dê algum erro na validação ele não para de executar as demais
    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signupPage.go() //step de ação (go e submit)
            signupPage.submit()

        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShoudBe(msg.output)

            })
        })

    })

})

////**** Aula - Cypress Run com evidências em videos ****////
//Obs:: Evidência em video só rodar:  npx cypress run -> cria a pasta e os videos já na execução

////**** Aula - Screenshots quando um teste falha ****////
//Obs:: Screenshots em imagem só rodar:  npx cypress run -> cria a pasta e os Screenshots já na execução 

 ////****Aula - Executando em outros navegadores ****////
 // npx cypress run -b chrome ->  executa o teste automatizado no chrome
 // npx cypress run -b edge ->  executa o teste automatizado no edge - novo
 // npx cypress run -b electron ->  executa o teste automatizado no electron
 // npx cypress run -b firefox ->  executa o teste automatizado no firefox 
 // npx cypress run -b chromium ->  executa o teste automatizado no chromium