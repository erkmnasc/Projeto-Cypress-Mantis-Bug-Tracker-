// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')

// O MantisBT de prova tem dois erros conhecidos no próprio JavaScript:
// um SyntaxError ao carregar as páginas e um ReferenceError ("List is not
// defined") na tela de erro da recuperação de senha. São erros da aplicação,
// não do teste, e só eles são ignorados; qualquer outro continua falhando.
Cypress.on('uncaught:exception', (err) => {
  if (err.name === 'SyntaxError') {
    return false
  }
  if (err.name === 'ReferenceError' && err.message.includes('List is not defined')) {
    return false
  }
})
