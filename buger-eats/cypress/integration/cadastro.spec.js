

describe('Cadastro', () => {  /// Se chama hero function
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1440, 900)  // Resolução full HD
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        ////**** Aula - Preenchendo campos ****////
        var entregador = {
            nome: 'Patricia Souza',
            cpf: '00000014141',
            email: 'patysonar@gmail.com',
            whatsapp: '11999999999',

            ////****Aula - Preenchendo endereco ****////

            endereco: {
                cep: '40450330',
                rua: 'Travessa Polivalente',
                numero: '1B',
                complemento: 'Casa Térreo',
                bairro: 'Uruguai',
                cidade_uf: 'Salvador/BA'

            },
            ////**** Aula - Combinando CSS Selector com Texto ****////

            metodo_entrega: 'Moto',  // Modo de entrega - informar modo de entrega desejada - Moto, Bicicleta e Van/Carro

            ////****Aula - Upload de arquivos ****////
            cnh: 'cnh-digital.jpg'

        }
        ////**** Aula - Preenchendo campos ****////
        cy.get('input[name = "name"]').type(entregador.nome)
        cy.get('input[name = "cpf"]').type(entregador.cpf)
        cy.get('input[name = "email"]').type(entregador.email)
        cy.get('input[name = "whatsapp"]').type(entregador.whatsapp)

        ////****Aula - Preenchendo endereco ****////
        cy.get('input[name = "postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name = "address-number"]').type(entregador.endereco.numero)
        cy.get('input[name = "address-details"]').type(entregador.endereco.complemento)

        ////**** Aula - Validando a busca de CEP ****////
        cy.get('input[name = "address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name = "district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name = "city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        ////**** Aula - Combinando CSS Selector com Texto ****////
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()  //Localizador - Buscando elemento pelo texto usando uma sintaxe limpa

        ////****Aula - Upload de arquivos ****////
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

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

        ////**** Aula - Validando span de alerta ****////
        var entregador = {
            nome: 'Patricia Souza',
            cpf: '0df00014141',
            email: 'patysonar@gmail.com',
            whatsapp: '11999999999',

            ////****Aula - Preenchendo endereco ****////

            endereco: {
                cep: '40450330',
                rua: 'Travessa Polivalente',
                numero: '1B',
                complemento: 'Casa Térreo',
                bairro: 'Uruguai',
                cidade_uf: 'Salvador/BA'

            },
            ////**** Aula - Combinando CSS Selector com Texto ****////

            metodo_entrega: 'Moto',  // Modo de entrega - informar modo de entrega desejada - Moto, Bicicleta e Van/Carro

            ////****Aula - Upload de arquivos ****////
            cnh: 'cnh-digital.jpg'

        }
        ////**** Aula - Preenchendo campos ****////
        cy.get('input[name = "name"]').type(entregador.nome)
        cy.get('input[name = "cpf"]').type(entregador.cpf)
        cy.get('input[name = "email"]').type(entregador.email)
        cy.get('input[name = "whatsapp"]').type(entregador.whatsapp)

        ////****Aula - Preenchendo endereco ****////
        cy.get('input[name = "postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name = "address-number"]').type(entregador.endereco.numero)
        cy.get('input[name = "address-details"]').type(entregador.endereco.complemento)

        ////**** Aula - Validando a busca de CEP ****////
        cy.get('input[name = "address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name = "district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name = "city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        ////**** Aula - Combinando CSS Selector com Texto ****////
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()  //Localizador - Buscando elemento pelo texto usando uma sintaxe limpa

        ////****Aula - Upload de arquivos ****////
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        ////****Submetendo forms e validando modal ****////
        cy.get('form button[type="submit"]').click()

        ////**** Aula - Validando span de alerta ****////
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido') 
        
           

    })
})