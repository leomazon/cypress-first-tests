/// <reference types="cypress" />

export default {
    clicarLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)

    },

    preencherNome(nome) {
        cy.get('#user')
            .type(nome)
    }

}