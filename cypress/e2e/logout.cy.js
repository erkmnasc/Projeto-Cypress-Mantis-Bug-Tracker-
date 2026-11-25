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

    it('clica no botão sair', function() {
        cy.contains('a.dropdown-toggle', 'Erick_Nascimento', { timeout: 15000 }).click()
        cy.get('a[href*="logout_page.php"]').should('be.visible').click()
        cy.url().should('include', 'login_page.php')
    })
})
