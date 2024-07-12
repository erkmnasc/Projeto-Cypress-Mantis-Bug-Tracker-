// criar_tarefa.cy.js created with Cypress

describe('Crie uma tarefa com sucesso preenchendo todos os campos', function() {

    beforeEach(function() {
        cy.homePage()
        cy.realizandoLoginNaAplicacaoComSucesso()
        cy.visit('/bug_report_page.php')
    })

    it('Crie uma tarefa com sucesso preenchendo todos os campos', function() {
        cy.CriandoUmaTarefaComSucesso()
    })
})



