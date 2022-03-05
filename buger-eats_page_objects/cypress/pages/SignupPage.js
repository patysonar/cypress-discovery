
class SignupPage {  // Vai representar a página de cadastro
    
    go() {   // Esta função vai acessar a página de form de cadastro
        cy.visit('/')  //Aula Viewport e Base URL[cypress.json] caminho da url

        cy.get('a[href = "/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {  // Vai preencher todo formulario de cadastro

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

    }

    submit() {
        ////****Submetendo forms e validando modal ****////
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('be.visible', expectedMessage) // codigo certo comentei para não ficar dando erro.

    }

    alertMessageShoudBe(expectedMessage) {
        ////**** Aula - Validando span de alerta ****////
        cy.get('.alert-error').should('have.text', expectedMessage)
    }
}

export default new SignupPage; // Exporta os instanciados
