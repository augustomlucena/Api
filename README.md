# 🧪 API Testing & Performance

Projeto de portfólio voltado para **Quality Assurance (QA)**, desenvolvido para demonstrar conhecimentos em **testes de API, automação de testes e testes de performance**.

## 🛠️ Tecnologias e ferramentas

* Postman
* JavaScript
* k6
* Git
* GitHub
* REST API
* HTTP

## 📁 Estrutura do projeto

```text
API/
├── k6/
│   └── performance-test.js
│
├── postman/
│   └── QA-API-Collection.json
│
├── reports/
│   └── k6-report.html
│
└── README.md
```

## 🔎 Testes de API — Postman

Foi desenvolvida uma Collection no Postman contendo testes automatizados para validação de APIs REST.

### Validações realizadas

* Status codes HTTP
* Estrutura das respostas
* Campos esperados
* Formato JSON
* Tempo de resposta
* Validação de dados retornados

Os testes utilizam scripts JavaScript executados automaticamente pelo Postman.

## ⚡ Teste de Performance — k6

Foi desenvolvido um script utilizando o k6 para avaliar o comportamento da API sob carga.

### Cenário executado

* **10 usuários virtuais**
* **30 segundos de execução**
* **280 requisições HTTP**
* **280 iterações**

### Thresholds definidos

```text
http_req_duration: p(95) < 1000ms
http_req_failed: rate < 1%
```

## 📊 Resultados

| Métrica           |   Resultado |
| ----------------- | ----------: |
| Requisições       |         280 |
| Usuários virtuais |          10 |
| Duração           | 30 segundos |
| Tempo médio       |     74,5 ms |
| Mediana           |     74,4 ms |
| p90               |    77,48 ms |
| p95               |    78,45 ms |
| Tempo máximo      |    84,62 ms |
| Taxa de erro      |       0,00% |
| Checks aprovados  |        100% |

### Resultado dos thresholds

```text
✓ p(95) < 1000ms
✓ Taxa de erros < 1%
✓ Status HTTP = 200
✓ Resposta contém usuários
✓ Tempo de resposta < 1000ms
```

## 📈 Análise

Durante o cenário executado, todas as requisições foram concluídas sem erros HTTP.

O tempo médio de resposta foi de **74,5 ms**, enquanto o **p95 foi de 78,45 ms**, permanecendo abaixo do limite de 1000 ms definido no teste.

Os checks automatizados apresentaram **100% de sucesso**, indicando que as validações implementadas foram atendidas durante a execução.

Os resultados representam especificamente o cenário utilizado, com 10 usuários virtuais durante 30 segundos, e não devem ser interpretados como uma avaliação definitiva do comportamento da API em cargas maiores ou em diferentes condições de infraestrutura.

## ▶️ Como executar

### Postman

Importe o arquivo:

```text
postman/QA-API-Collection.json
```

no Postman e execute a Collection utilizando o Collection Runner.

### k6

Com o k6 instalado, execute:

```bash
k6 run k6/performance-test.js
```

## 🎯 Objetivos do projeto

Este projeto foi desenvolvido para praticar e demonstrar conhecimentos em:

* Testes funcionais de API
* Automação de testes
* Validação de respostas HTTP
* Testes de performance
* Análise de métricas
* Definição de thresholds
* Identificação de possíveis problemas de performance
* Documentação de resultados
* Git e GitHub

## 👨‍💻 Autor

**José Augusto Monteiro de Lucena**

Estudante de Sistemas de Informação | QA | Desenvolvimento de Software

[GitHub](https://github.com/augustomlucena)
