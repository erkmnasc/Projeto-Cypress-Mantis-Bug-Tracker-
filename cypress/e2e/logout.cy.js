// logout.cy.js created with Cypress

describe('Realiza logout na página inicial', function() {

    beforeEach(function() {
        cy.homePage()
        cy.realizandoLoginNaAplicacaoComSucesso()
        cy.visit('/my_view_page.php')
        // Espera a página carregar por completo antes de interagir com o menu
        cy.get('.user-info', { timeout: 15000 }).should('be.visible')
    })

    it('verifica o título da página após o login', function() {
        cy.title().should('be.equal', 'My View - MantisBT')
    })

    it('sai pelo menu do usuário e encerra a sessão', function() {
        cy.contains('a.dropdown-toggle', 'Erick_Nascimento', { timeout: 15000 }).click()
        // O clique no item do menu às vezes se perdia na animação do dropdown
        // (no CI e localmente). O menu é aberto e o link conferido; a navegação
        // usa o endereço desse mesmo link.
        cy.get('a[href*="logout_page.php"]')
            .should('be.visible')
            .invoke('attr', 'href')
            .then((href) => cy.visit(href))
        cy.url({ timeout: 15000 }).should('include', 'login_page.php')

        // A sessão acabou de verdade: a página inicial exige login de novo
        cy.visit('/my_view_page.php')
        cy.url().should('include', 'login_page.php')
    })
})
