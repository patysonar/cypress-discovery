

describe('Cadastro', () => {  /// Se chama hero function
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1440, 900)  // Resolução full HD
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

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
        ////**** Aula - Preenchendo campos ****////
        cy.get('input[name = "name"]').type(deliver.name)
        cy.get('input[name = "cpf"]').type(deliver.cpf)
        cy.get('input[name = "email"]').type(deliver.email)
        cy.get('input[name = "whatsapp"]').type(deliver.whatsapp)

        ////****Aula - Preenchendo endereco ****////
        cy.get('input[name = "postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name = "address-number"]').type(deliver.address.number)
        cy.get('input[name = "address-details"]').type(deliver.address.details)

        ////**** Aula - Validando a busca de CEP ****////
        cy.get('input[name = "address"]').should('have.value', deliver.address.street)
        cy.get('input[name = "district"]').should('have.value', deliver.address.district)
        cy.get('input[name = "city-uf"]').should('have.value', deliver.address.city_state)

        ////**** Aula - Combinando CSS Selector com Texto ****////
        cy.contains('.delivery-method li', deliver.delivery_method).click()  //Localizador - Buscando elemento pelo texto usando uma sintaxe limpa

        ////****Aula - Upload de arquivos ****////
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        ////****Submetendo forms e validando modal ****////
        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'  //// Valor constante que não vai mudar

        cy.get('.swal2-container .swal2-html-container')
            .should('be.visible', expectedMessage)


    })

    it('CPF Incorreto', () => {
        cy.viewport(1440, 900)  // Resolução full HD
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

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
        ////**** Aula - Preenchendo campos ****////
        cy.get('input[name = "name"]').type(deliver.name)
        cy.get('input[name = "cpf"]').type(deliver.cpf)
        cy.get('input[name = "email"]').type(deliver.email)
        cy.get('input[name = "whatsapp"]').type(deliver.whatsapp)

        ////****Aula - Preenchendo endereco ****////
        cy.get('input[name = "postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name = "address-number"]').type(deliver.address.number)
        cy.get('input[name = "address-details"]').type(deliver.address.details)

        ////**** Aula - Validando a busca de CEP ****////
        cy.get('input[name = "address"]').should('have.value', deliver.address.street)
        cy.get('input[name = "district"]').should('have.value', deliver.address.district)
        cy.get('input[name = "city-uf"]').should('have.value', deliver.address.city_state)

        ////**** Aula - Combinando CSS Selector com Texto ****////
        cy.contains('.delivery-method li', deliver.delivery_method).click()  //Localizador - Buscando elemento pelo texto usando uma sintaxe limpa

        ////****Aula - Upload de arquivos ****////
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        ////****Submetendo forms e validando modal ****////
        cy.get('form button[type="submit"]').click()

        ////**** Aula - Validando span de alerta ****////
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')



    })
})