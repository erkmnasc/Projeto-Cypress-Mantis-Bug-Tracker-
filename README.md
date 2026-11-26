# Projeto Cypress: Mantis Bug Tracker

[![End-to-end tests](https://github.com/erkmnasc/Projeto-Cypress-Mantis-Bug-Tracker-/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/Projeto-Cypress-Mantis-Bug-Tracker-/actions/workflows/ci.yml)

Testes E2E com Cypress e JavaScript no MantisBT (ambiente de prova da Base2),
feitos para um processo seletivo. Projeto pessoal.

## O que é testado

- **Login:** título da aplicação, login com sucesso (confere o usuário logado),
  nome vazio e senha vazia.
- **Recuperação de senha:** solicitação aceita e três casos de erro, cada um
  conferindo o código que o Mantis mostra: e-mail com caracteres inválidos e
  e-mail vazio (#1200) e e-mail não cadastrado (#1903).
- **Logout:** volta para a tela de login.
- **Criação de tarefa:** o resumo leva um número único e o teste confere que a
  tarefa aberta depois do envio é a que acabou de ser criada.

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

- O MantisBT de prova tem dois erros no próprio JavaScript: um `SyntaxError`
  ao carregar as páginas e um `ReferenceError` ("List is not defined") na tela
  de erro da recuperação de senha. `cypress/support/e2e.js` ignora só esses
  dois; qualquer outro erro continua falhando o teste.
- O ambiente limita cada usuário a 10 ações por hora (APPLICATION ERROR #27).
  Rodar a suíte várias vezes seguidas faz a criação de tarefa falhar com essa
  mensagem; basta esperar.
