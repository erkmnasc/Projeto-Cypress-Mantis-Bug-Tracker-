const botaoEntrar = 'input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]'
const usuario = 'Erick_Nascimento'

Cypress.Commands.add('homePage', function() {
    cy.visit('/')
})

Cypress.Commands.add('realizandoLoginNaAplicacaoComSucesso', function() {
    cy.get('#username').should('have.value', '').type(usuario)
    cy.get(botaoEntrar).click()
    cy.get('#password').type('teste@teste24')
    cy.get('input[type="checkbox"]').should('have.length', 2)
    cy.get('input[type="checkbox"][name="perm_login"]').should('not.be.checked')
    cy.get(botaoEntrar).click()
    // Depois do login o Mantis passa por index.php antes da página inicial;
    // o nome do usuário no topo confirma o login em qualquer uma delas
    cy.get('.user-info', { timeout: 15000 }).should('contain.text', usuario)
})

Cypress.Commands.add('realizandoLoginNaAplicacaoComNomeVazio', function() {
    cy.get('#username').should('have.value', '')
    cy.get(botaoEntrar).click()
    cy.get('.alert-danger').should('be.visible')
})

Cypress.Commands.add('realizandoLoginNaAplicacaoComSenhaVazio', function() {
    cy.get('#username').should('have.value', '').type(usuario)
    cy.get(botaoEntrar).click()
    cy.get('#password').should('have.value', '')
    cy.get(botaoEntrar).click()
    cy.get('.alert-danger').should('be.visible')
})

// Abre a tela "Reajuste de Senha" a partir do login
Cypress.Commands.add('abrirRecuperacaoDeSenha', function() {
    cy.get('#username').should('have.value', '').type(usuario)
    cy.get(botaoEntrar).click()
    cy.get('a.pull-right').click()
    cy.url().should('include', 'lost_pwd_page.php')
})

// O email precisa ser o da conta de teste para o Mantis aceitar a solicitação
Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComSucesso', function() {
    cy.abrirRecuperacaoDeSenha()
    cy.get('#email-field').type('erick_mendes@live.com')
    cy.get(botaoEntrar).click()
    cy.url().should('include', 'login_page.php')
    cy.contains('APPLICATION ERROR').should('not.exist')
})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmailComCaracteresInvalidos', function() {
    cy.abrirRecuperacaoDeSenha()
    cy.get('#email-field').type('tes,te@tes,te,com')
    cy.get(botaoEntrar).click()
    cy.get('.alert').should('contain.text', 'APPLICATION ERROR #1200')
    cy.get('.error-info').should('be.visible')
})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmaiNaoRegistrado', function() {
    cy.abrirRecuperacaoDeSenha()
    cy.get('#email-field').type('qa.nao.cadastrado@example.com')
    cy.get(botaoEntrar).click()
    cy.get('.alert').should('contain.text', 'APPLICATION ERROR #1903')
    cy.get('.error-info').should('be.visible')
})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmaiVazio', function() {
    cy.abrirRecuperacaoDeSenha()
    cy.get('#email-field').should('have.value', '')
    cy.get(botaoEntrar).click()
    cy.get('.alert').should('contain.text', 'APPLICATION ERROR #1200')
    cy.get('.error-info').should('be.visible')
})

// O resumo leva um número único para conferir que a tarefa aberta é a criada agora
Cypress.Commands.add('CriandoUmaTarefaComSucesso', function() {
    const resumo = `Testando a aplicação ${Date.now()}`
    cy.get('#category_id').should('be.visible').select('[All Projects] categoria teste')
    cy.get('#reproducibility').should('be.visible').select('always')
    cy.get('#severity').should('be.visible').select('minor')
    cy.get('#priority').should('be.visible').select('urgent')
    cy.get('#summary').should('have.value', '').type(resumo)
    cy.get('#description').should('have.value', '').type("Testando a aplicação")
    cy.get('#steps_to_reproduce').should('have.value', '').type("Testando a aplicação")
    cy.get('#additional_info').should('have.value', '').type("Testando a aplicação")
    cy.get('#tag_string').should('have.value', '').type("Testando a aplicação")
    cy.get('#tag_select').select('Desenvolvimento')
    cy.get('.widget-toolbox > .btn').click()
    // O Mantis de prova limita a 10 ações por hora por usuário (APPLICATION ERROR #27).
    // Se o limite estourar, o teste falha com essa mensagem em vez de um timeout genérico.
    cy.contains('APPLICATION ERROR #27').should('not.exist')
    // Depois da confirmação (bug_report.php?posted=1) o Mantis abre a tarefa criada
    cy.url({ timeout: 20000 }).should('include', 'view.php?id=')
    cy.contains('td', resumo).should('be.visible')
})
