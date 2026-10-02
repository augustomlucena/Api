# QA API Testing + Performance

Projeto de portfólio desenvolvido para demonstrar conhecimentos em
testes de API e testes de performance.

## 🧪 Ferramentas

- Postman
- JavaScript
- k6
- Git
- GitHub

## 🔎 Testes de API

A Collection do Postman contém testes automatizados para:

- GET
- POST
- PUT
- DELETE
- Status codes
- Estrutura das respostas
- Campos obrigatórios
- Tempo de resposta

## ⚡ Teste de Performance

Foi desenvolvido um script utilizando k6 para simular:

- 10 usuários virtuais
- 30 segundos de execução
- Validação de status HTTP
- Validação do tempo de resposta
- Validação da taxa de erros
- Análise do p95

## 📊 Critérios

| Métrica | Critério |
|---|---|
| HTTP Status | 200 |
| p95 | < 1000 ms |
| Taxa de erro | < 1% |

## 🎯 Objetivo

Demonstrar conhecimentos práticos em testes automatizados de API,
validação de respostas e análise de performance.