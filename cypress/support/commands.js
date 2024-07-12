Cypress.once('uncaught:exception', (err, runnable) => {
    return false;
})

Cypress.Commands.add('homePage', function() {
    cy.visit('/')
    })

Cypress.Commands.add('realizandoLoginNaAplicacaoComSucesso', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('#password').type('teste@teste24')
    cy.get('input[type="checkbox"]').should('have.length', 2)
    cy.once
    cy.get('input[type="checkbox"][name="perm_login"]').should('not.be.checked')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
})

Cypress.Commands.add('realizandoLoginNaAplicacaoComNomeVazio', function() {
    cy.get('#username').should('have.value', '')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('.alert-danger').should('be.visible')
})

Cypress.Commands.add('realizandoLoginNaAplicacaoComSenhaVazio', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('#password').should('have.value', '')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('.alert-danger').should('be.visible')
})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComSucesso', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('a.pull-right').click()
    cy.get('#email-field').type('erick_mendes@live.com')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
})



Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmailComCaracteresInvalidos', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('a.pull-right').click()
    cy.get('#email-field').type('tes,te@tes,te,com')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('.error-info').should('be.visible')

})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmaiNaoRegistrado', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('a.pull-right').click()
    cy.get('#email-field').type('teste@teste.com')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.visit('/lost_pwd.php')
    cy.get('.error-info').should('be.visible')
})

Cypress.Commands.add('SolicitandoRecuperacaoDeSenhaComEmaiVazio', function() {
    cy.get('#username').should('have.value', '').type('Erick_Nascimento')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('a.pull-right').click()
    cy.get('#email-field').should('have.value', '')
    cy.get('input[type="submit"][class="width-40 pull-right btn btn-success btn-inverse bigger-110"]').click()
    cy.get('.error-info').should('be.visible')
})

Cypress.Commands.add('CriandoUmaTarefaComSucesso', function() {
    cy.get('#category_id').should('be.visible').select('[All Projects] categoria teste')
    cy.get('#reproducibility').should('be.visible').select('always')
    cy.get('#severity').should('be.visible').select('minor')
    cy.get('#priority').should('be.visible').select('urgent')
    cy.get('#summary').should('have.value', '').type("Testando a aplicação")
    cy.get('#description').should('have.value', '').type("Testando a aplicação")
    cy.get('#steps_to_reproduce').should('have.value', '').type("Testando a aplicação")
    cy.get('#additional_info').should('have.value', '').type("Testando a aplicação")
    cy.get('#tag_string').should('have.value', '').type("Testando a aplicação")
    cy.get('#tag_select').select('Desenvolvimento')
    cy.get('.widget-toolbox > .btn').click()
})

