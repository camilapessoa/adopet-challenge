# Adopet

Adopet é uma plataforma que conecta pessoas que desejam adotar animais de estimação e abrigos/ONGs que buscam adoção para seus pets. Este projeto foi desenvolvido como um desafio proposto pelo curso de desenvolvimento web da Alura.

## Funcionalidades do Backend

- Implementação de API REST com rotas conforme o padrão REST;
- Validações de regras de negócio para as entradas e saídas de dados;
- Implementação de base de dados PostgreSQL com Sequelize como ORM para persistência das informações;
- Serviço de autenticação para acesso às rotas GET, POST, PUT e DELETE.

## Metodologia

O desenvolvimento do projeto utilizou a metodologia ágil de desenvolvimento e a ferramenta Trello para gerenciamento das tarefas. O projeto foi dividido em 3 semanas de desenvolvimento e 1 semana para ajustes ou para concluir as tarefas pendentes.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- JWT
- Docker

## Equipe

- Camila Pessoa
- Leandro Moraes

## Instalação e Uso

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/camilapessoa/adopet-challenge
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Configure o arquivo .env com as informações do banco de dados:

```txt
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=nome-do-banco
DB_PORT=5432
JWT_SECRET=chave-secreta
```

4. Execute as migrations do banco de dados:

```bash
npx sequelize-cli db:migrate
```

5. Execute o servidor:

```bash
npm start
```
