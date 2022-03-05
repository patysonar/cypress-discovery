import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {      /// Se chama hero function

    ////**** Aula - Entendendo os ganchos do Cypress ****////
    //**Só foi para mostrar como funciona os ganchos
    // before(function () {
    //     cy.log('Tudo aqui é executdo uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function () {
    //     cy.log('Tudo aqui é executdo sempre ANTES de CADA caso de teste')
    // })

    // after(function () {
    //     cy.log('Tudo aqui é executdo uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executdo sempre DEPOIS de CADA caso de teste')
    // })

    it('Usuario deve se tornar um entregador', () => {
        ////**** Aula - Refatorando a massa de testes para inglês ****////
        var deliver = {
            name: 'Patricia Souza',
            cpf: '00000014141',
            email: 'patysonar@gmail.com',
            whatsapp: '11999999999',

            ////****Aula  - Preenchendo endereco ****////
            address: {
                postalcode: '40450330',
                street: 'Travessa Polivalente',
                number: '1B',
                details: 'Casa Térreo',
                district: 'Uruguai',
                city_state: 'Salvador/BA'

            },
            ////**** Aula - Combinando CSS Selector com Texto ****////
            delivery_method: 'Moto',  // Modo de entrega - informar modo de entrega desejada - Moto, Bicicleta e Van/Carro

            ////****Aula - Upload de arquivos ****////
            cnh: 'cnh-digital.jpg'

        }
        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'    //// Valor constante que não vai mudar
        signup.modalContentShouldBe(expectedMessage)
    })


    it('CPF Incorreto', () => {

        ////**** Aula - Refatorando a massa de testes para inglês ****////
        var deliver = {
            name: 'Patricia Souza',
            cpf: '000000141AA',
            email: 'patysonar@gmail.com',
            whatsapp: '11999999999',

            ////****Aula  - Preenchendo endereco ****////

            address: {
                postalcode: '40450330',
                street: 'Travessa Polivalente',
                number: '1B',
                details: 'Casa Térreo',
                district: 'Uruguai',
                city_state: 'Salvador/BA'

            },
            ////**** Aula - Combinando CSS Selector com Texto ****////

            delivery_method: 'Moto',  // Modo de entrega - informar modo de entrega desejada - Moto, Bicicleta e Van/Carro

            ////****Aula - Upload de arquivos ****////
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoudBe('Oops! CPF inválido')


    })
})