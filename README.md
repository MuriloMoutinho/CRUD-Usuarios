# Sistema de Gerenciamento de Usuários

## Visão Geral
O Sistema de Gerenciamento de Usuários é uma aplicação web desenvolvida para permitir o cadastro, autenticação e gestão de usuários. Foi construído utilizando Angular 17 para o frontend, Java Spring Boot 3.1.5 para o backend e SQLite como banco de dados.

## Requisitos do Sistema
- Node.js
- Angular CLI
- Java JDK 17
- Maven
- IDE Java (Eclipse, IntelliJ, etc.)

## Configuração e Instalação
1. Clone o repositório do projeto:

### Front-End
1. Baixar as dependências do front-end na pasta "./src/app/", rodando o comando `npm install`
2. Caso já possua o Angular CLI, prossiga. Caso contrário, execute o comando `npm install -g @angular/cli`
3. Executar o servidor do front-end com o comando `ng serve`
4. Acesse o sistema no navegador pelo endereço: `http://localhost:4200`

### Back-End
Caso possua o maven instalado como váriavel de ambiente, basta executar o comando `mvn spring-boot:run` na pasta "./src/api/"
Caso não possua:
1. Importe o projeto backend na sua IDE Java.
2. Certifique-se de configurar o JDK 17 como o ambiente de execução.
3. Execute a aplicação Spring Boot.

-O banco de dados SQLite já está configurado no projeto e será automaticamente utilizado.
