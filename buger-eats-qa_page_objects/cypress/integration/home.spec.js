

describe('home page', () => {   // função de java script
    it('app deve estar online', () => {    // caso de teste começam com IT
        cy.viewport(1440, 900)  // Resolução full HD
        cy.visit('https://buger-eats-qa.vercel.app/')    // no Visual Code o comando pra identar é Shift+Alt+F
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats' ) //Should é um assert expectativa para fazer uma validação
    })

})