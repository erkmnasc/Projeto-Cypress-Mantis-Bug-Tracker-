// logout.cy.js created with Cypress

describe('Realiza logout na página inicial', function() {

    beforeEach(function() {
        cy.homePage()
        cy.realizandoLoginNaAplicacaoComSucesso()
        cy.visit('/my_view_page.php')
    })

    it('verifica o título da página após o login', function() {
        cy.title().should('be.equal', 'My View - MantisBT')
    })

    it.only('clica no botão sair', function() {
        cy.get('.fa-angle-down').click()
        cy.get('.user-menu > :nth-child(4) > a').click()
    })
})
