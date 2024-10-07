# Asaas Tech Lab Hackathon - Node

Seja bem-vindo(a)! Neste hackathon, o seu objetivo é tentar implementar soluções para 3 desafios.

Você recebeu um material impresso com a sua chave de API do Asaas e o link deste repositório. É muito importante que você leia todo este README para ficar atento às regras.

## Primeiros passos

Cada equipe ou participante deverá realizar um fork deste repositório, de forma privada e dando acesso admin ao time de avaliadores, nos seguintes usuários do GitHub

```
DouglasGiovanella
GlauberF
jpdev01
larisseabitencourt
marlon407
Thuran
willevini
```

## Pré-requisitos

Para o desenvolvimento do projeto, existe um arquivo docker-compose.yml que sobe a aplicação já nas versões testadas de Node e npm.
<br>
**Nota**: Lembre-se de definir a variável de ambiente `ASAAS_API_KEY` nas variáveis de ambiente do docker-compose.yml.
<br><br>
O template utiliza Express na versão 4.19.2, ORM Sequelize na versão 6.32.1 e SQLite3 na versão 5.1.6.
<br>
Link para a documentação do Sequelize utilizado: https://sequelize.org/docs/v6/
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

Link para documentacao do Swagger utilizado: https://github.com/Surnet/swagger-jsdoc/blob/v5/docs/GETTING-STARTED.md 

### Subindo a aplicação
Para subir a aplicação, basta rodar o comando `docker-compose up -d` na raiz do projeto. Ao subir, a aplicação estará disponível na porta 8080.
<br><br>
Para rodar as migrações e seeds:

```bash
docker-compose exec tech-lab-app bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
ou

```bash
docker-compose exec tech-lab-app npx sequelize-cli db:migrate
docker-compose exec tech-lab-app npx sequelize-cli db:seed:all
```

<br>
**Nota** : A API roda em modo de desenvolvimento, utilizando o Nodemon.

### Comandos uteis
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

### Estrutura do Projeto
`asaas-tech-lab-node` <br>
├── `src` <br>
│   ├── `controllers` Pasta que armazena os controllers da aplicação <br>
│   │   ├── `controller.ts` Abstração para ser estendida aos seus controllers <br>
│   ├── `database` <br>
│   │   ├── `config.json` Configurações do banco de dados <br>
│   │   └── `migrations` Pasta que armazena as migrations criadas <br>
│   │   └── `seeders` Pasta que armazena as seeds criadas <br>
│   ├── `enums` Pasta que armazena os enums da aplicação <br>
│   ├── `helpers` Pasta que armazena os helpers da aplicação <br>
│   ├── `models` Pasta que armazena os models da aplicação <br>
│   │   └── `index.ts` Arquivo que conecta os models ao banco de dados de forma dinâmica <br>
│   ├── `routes` Pasta que armazena as rotas da aplicação <br>
│   │   └── `index.ts` Arquivo que conecta as rotas ao app <br>
│   ├── `services` Pasta que armazena os services da aplicação <br>
│   │   ├── `services.ts` Abstração para ser estendida aos seus serviços <br>
│   ├── `types` Pasta que armazena os types da aplicação <br>
│   └── `app.ts` <br>
├── `.eslintrc.json` Configurações do ESLint <br>
├── `.sequelizerc` Configurações do Sequelize <br>
├── `database.sqlite` Banco de dados <br>
├── `docker-compose.yml` <br>
├── `Dockerfile` <br>
├── `server.ts` <br>
└── `tsconfig.json` Configurações do TypeScript <br>


## Desafios

**Desafio 1: Adicionar rate-limit, burst e quota na API**
- O desafio consiste em receber uma alta carga de chamados na API e adicionar os limites
- A aplicação deve realizar bloqueios baseado nas regras definidas
- É interessante criar um endpoint para resetar os limites
- Rate-limit
  - máximo de 100 requisições por minuto nos endpoints de Lista cobranças e Recuperar uma única cobrança
- Burst (semáforo)
  - máximo de 10 requisições paralelas no endpoint de Criar cobrança
- Quota (semáforo)
  - verificar limites diários configurados para cada usuário para limitar o número de cobranças criadas por dia

**Desafio 2: Fazer uma rotina de transferências automáticas no Asaas**
- O desafio é criar um Job que irá realizar transferências automáticas diariamente às 8h e 12h
- A aplicação deve integrar-se com o Asaas, receber pagamentos de cobranças e realizar a transferência para outra conta (chaves abaixo) via Pix:
  - 'c4c52a44-070e-454a-8417-3cc312986a68'
  - '524d069f-7b61-425b-a211-6cb3ad4ba1b5'
  - 'c2a81e71-a138-4e34-985e-a5abea4cd0f5'
  - '942c4a99-770b-40ac-9068-f152a0adc532'
  - '95f80f23-bf81-4d9c-9090-a16caa18f17e'
- Verificar saldo e realizar transferências apenas se tiver saldo positivo

**Desafio 3: Aplicar idempotência**
- Fazer com que o controller de cobranças seja idempotente

## O que será avaliado?
- Desempenho da aplicação
  - O código teve um bom desempenho?
  - As respostas foram rápidas?
  - O teste de desempenho trouxe quais resultados?
- Código funcional
  - É possível rodar o código de uma forma fácil?
  - Não é necessário instalar nenhuma ferramenta extra?
- Boas práticas
  - O código usou boas práticas de desenvolvimento de software?
- Organização
  - O código está bem organizado?
  - É fácil de ler e entender?
- Ferramental
  - Foram usadas as melhores ferramentas disponíveis?
- Tempo de entrega
  - O grupo respeitou o tempo de entrega?
 
## Premiações

- Melhor solução
  - O grupo/pessoa que entregou uma ou mais categorias e recebeu a maior nota de todos os avaliadores
  
- Entrega mais rápida
  - O grupo/pessoa que entregou todas as soluções funcionando em menor tempo
  
- Extra
  - O grupo/pessoa que entregou algo a mais, que chamou a atenção de todos os avaliadores

## Processo de submissão dos desafios

[Este é o formulário de envio das submissões.](https://docs.google.com/forms/d/e/1FAIpQLSfefkzby7VuA910I0KtIHiGGjVrj1ePDGkYwJZlitTuKnVOuQ/viewform?usp=sf_link)

- O encerramento da participação se dá pelo envio de um formulário com o link do repositório criado, o formulário precisará das informações:
  - Nome da equipe/pessoa
  - Link do repositório
  - Decisões tomadas
- Após o envio não podem mais ser feitas alterações no código e qualquer alteração será desconsiderada, podendo causar a desclassificação dos participantes
