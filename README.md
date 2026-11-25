# Projeto Cypress: Mantis Bug Tracker

[![End-to-end tests](https://github.com/erkmnasc/Projeto-Cypress-Mantis-Bug-Tracker-/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/Projeto-Cypress-Mantis-Bug-Tracker-/actions/workflows/ci.yml)

Testes E2E com Cypress e JavaScript no MantisBT (ambiente de prova da Base2),
feitos para um processo seletivo. Projeto pessoal.

## O que é testado

- **Login:** título da aplicação, login com sucesso, nome vazio, senha vazia e
  recuperação de senha.
- **Logout.**
- **Criação de tarefa.**

Os comandos reutilizáveis ficam em `cypress/support/commands.js`.

## CI

O workflow `.github/workflows/ci.yml` roda a suíte no GitHub Actions a cada
push na `main`, em pull requests e sob demanda. Em caso de falha, os
screenshots ficam salvos como artefato da execução.

## Como rodar

Pré-requisito: Node.js e npm.

```bash
npm install
npm test          # modo headless
npm run cy:open   # modo interativo
```

## Observações

- O MantisBT de prova lança um `SyntaxError` no JavaScript da própria página.
  Como o erro é da aplicação, `cypress/support/e2e.js` o ignora em todos os
  cenários; qualquer outro erro continua falhando o teste.
- Três cenários de recuperação de senha (e-mail inválido, não registrado e
  vazio) estão comentados em `login.cy.js`: a aplicação lança uma exceção não
  tratada nesses fluxos.
