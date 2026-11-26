// login.cy.js created with Cypress

describe('Realiza login na página inicial', function() {

    beforeEach(function() {
        cy.homePage()      
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'MantisBT')
    })

    it('Realiza login na aplicação com sucesso', function() {
        cy.realizandoLoginNaAplicacaoComSucesso()
    })

    it('Realiza login na aplicação com o campo nome vazio', function() {
        cy.realizandoLoginNaAplicacaoComNomeVazio()
    })

    it('Realiza login na aplicação com o campo senha vazio', function() {
        cy.realizandoLoginNaAplicacaoComSenhaVazio()
    })

    it('Solicitação de recuperação de senha com sucesso', function() {
        cy.SolicitandoRecuperacaoDeSenhaComSucesso()
    })
    // A tela de erro do Mantis lança "List is not defined" no próprio JavaScript.
    // O handler em cypress/support/e2e.js ignora só essa mensagem.
    it('Solicitação de recuperação de senha com e-mail e caracteres inválidos', function() {
        cy.SolicitandoRecuperacaoDeSenhaComEmailComCaracteresInvalidos()
    })

    it('Solicitação de recuperação de senha com e-mail não registrado', function() {
        cy.SolicitandoRecuperacaoDeSenhaComEmaiNaoRegistrado()
    })

    it('Solicitação de recuperação de senha com e-mail vazio', function() {
        cy.SolicitandoRecuperacaoDeSenhaComEmaiVazio()
    })
  })