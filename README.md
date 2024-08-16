# Asaas Tech lab - Node
Template para desenvolvimento de API em Node.js
<br><br>
Para o desenvolvimento do projeto, existe um arquivo docker-compose.yml que sobe a aplicação já nas versões testadas de Node e npm.
<br><br>
O template utiliza Express na versão 4.19.2, ORM Sequelize na versão 6.32.1 e SQLite3 na versão 5.1.6.
<br>
Link para a documentação do Sequelize utilizado: Sequelize Documentation
<br><br>
O Swagger foi habilitado, então, ao definir uma rota através da anotação `@swagger`, é possível gerar a documentação da API.<br> 
Também é possível acessar a documentação na URL `/docs` e fazer os testes. Exemplo:

```typescript
/**
 * @swagger
 * /test:
 *   get:
 *     summary: Retorna a lista dos registros testes
 *     responses:
 *       200:
 *         description: Lista de registros testes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: Name.
 *                         example: Sou um teste
 */
router.get('/test', (req: Request, res: Response) => testController.findAll(req, res));
```
<br>
Link para documentacao do Swagger utilizado: https://swagger.io/docs/specification/about/
<br><br>

## Subindo a aplicação
Para subir a aplicação, basta rodar o comando `docker-compose up -d` na raiz do projeto. Ao subir, a aplicação estará disponível na porta 3000.
<br>
Para rodar as migrações e seeds:

```bash
docker-compose exec app bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
ou

```bash
docker-compose exec app npx sequelize-cli db:migrate
docker-compose exec app npx sequelize-cli db:seed:all
```

<br>
**Nota** : A API roda em modo de desenvolvimento, utilizando o Nodemon.

## Comandos uteis
Gerar Model: 

```bash
npx sequelize-cli model:generate --name Test --attributes name:string,.. 
```

Rodar Migrate: 

```bash
npx sequelize-cli db:migrate
```

Seed:
- Criar seed: 
```bash
npx sequelize-cli seed:generate --name test
```

- Roda a seed 
```bash
npx sequelize-cli db:seed:all
```

## Estrutura do Projeto
asaas-tech-lab-node <br>
├── src <br>
│   ├── controllers (Pasta que armazena os controllers da aplicação) <br>
│   │   ├── controller.ts (Abstração para ser estendida aos seus controllers) <br>
│   ├── database <br>
│   │   ├── config.json (Configurações do banco de dados) <br>
│   │   └── migrations (Pasta que armazena as migrations criadas) <br>
│   │   └── seeders (Pasta que armazena as seeds criadas) <br>
│   ├── enums (Pasta que armazena os enums da aplicação) <br>
│   ├── helpers (Pasta que armazena os helpers da aplicação) <br>
│   ├── models (Pasta que armazena os models da aplicação) <br>
│   │   └── index.ts (Arquivo que conecta os models ao banco de dados de forma dinâmica) <br>
│   ├── routes (Pasta que armazena as rotas da aplicação) <br>
│   │   └── index.ts (Arquivo que conecta as rotas ao app) <br>
│   ├── services (Pasta que armazena os services da aplicação) <br>
│   │   ├── services.ts (Abstração para ser estendida aos seus serviços) <br>
│   ├── types (Pasta que armazena os types da aplicação) <br>
│   └── app.ts <br>
├── .eslintrc.json (Configurações do ESLint) <br>
├── .sequelizerc (Configurações do Sequelize) <br>
├── database.sqlite (Banco de dados) <br>
├── docker-compose.yml <br>
├── Dockerfile <br>
├── server.ts <br>
└── tsconfig.json (Configurações do TypeScript) <br>
