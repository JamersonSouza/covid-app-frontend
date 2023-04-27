# Projeto Covid19 API - Front End

Este é um projeto que consome o back-end da api covid-app para exibir informações sobre a pandemia do COVID-19 no mundo e em diferentes países. Além disso, este projeto possui um sistema de autenticação de usuários utilizando JWT. Foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Instalação

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Node.js
* Angular CLI
* Visual Studio Code


Em seguida, execute os seguintes comandos em seu terminal para clonar o repositório projeto:

> git clone https://github.com/JamersonSouza/covid-app-frontend.git

> **code .** (para abrir o projeto no vs code)

> cd covid-app-frontend

> **npm install** - para isntalar as dependências

> **ng s** - para iniciar o servidor

Abra o navegador e acesse o endereço http://localhost:4200
## Funcionalidades

* Login e logout de usuários utilizando JWT
* Visualização de estatísticas da pandemia no Mundo e no Brasil.
* Salvar estatísticas geradas no banco de dados.
* Guards implementado para proteção de Rotas de acesso apenas se o usuário estiver autenticado.
* Criação de um Módulo compartilhado para os components da aplicação.
* Interceptor para enviar o token do usuário autenticado nos headers da requisição.
* Serviço de autenticação que salva o token no LocalStorage do navegador.

## Melhorias que o projeto pode ter

* Capturar o ID do usuário autenticado para enviar junto com a comparação entre países.

* Feedbacks para o usuário em erros ocorridos durante o uso da aplicação.

* Listagem das comparações salvas pelo o usuário.

* Painel para acesso da conta do usuário com mais detalhes e funções.
