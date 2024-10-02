# Objetivo

Projeto com o objetivo de criar uma pipeline para a matéria Cultura e Prática devops da pós PUC Minas.

# Sobre o projeto

O projeto desenvolvido em Express oferece aos usuários a escolha entre calcular o fatorial de um número ou realizar um cálculo exponencial na tela inicial.Ao optar pelo cálculo do fatorial, o usuário é redirecionado para uma nova tela onde pode inserir o número desejado para a operação. Se preferir calcular o exponencial, ele é conduzido para outra tela onde pode fornecer a base e o expoente para o cálculo. Para assegurar a qualidade do código, foram implementados testes unitários com Jest e testes de integração com Supertest.

Link para acessar o site (Disponivél em 11 de Maio de 2024): https://projeto-ci-cd-pos-puc.onrender.com/

## Pipeline

Foi estabelecida uma pipeline para o projeto, na qual a execução dos testes de integração e de unidade é acionada a cada commit ou pull request na branch principal. Resumidamente, a pipeline segue os seguintes passos:
* Checkout do Repositório: Realiza o checkout do repositório onde o código está armazenado.
* Definição da Versão do Node: Especifica a versão do Node.js a ser utilizada nos testes, configurada para a versão 20.x neste caso.
* Instalação de Dependências: Instala as dependências do projeto utilizando o npm.
* Execução de Testes Unitários: Realiza os testes unitários do projeto por meio do comando npm run teste-unitario.
* Execução de Testes de Integração: Conduz os testes de integração do projeto utilizando o comando npm run teste-integracao.


## Instalação e subir a aplicação:

1. Utilizar a versão 20 do node:

```
nvm use 20
```

2. Instale as dependencias:

```
npm i
```

3. Subir o servidor:
```
npm run start
``` 

## Como Rodar os testes de integração e unitários

Para executar os testes unitário executar:
```
 npm run teste-unitario
```

Para executar os testes integração executar:
```
 npm run teste-integracao
```
## Jenkinsfile

Este projeto inclui um arquivo Jenkinsfile desenvolvido com o objetivo de explorar e aprender sobre pipelines do Jenkins. A pipeline é configurada para executar testes unitários e testes de integração.
