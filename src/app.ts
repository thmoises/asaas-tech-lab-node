import express from 'express';
import routes from './routes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Swagger aplicação Node - Asaas Tech Lab',
        description:
            'Esta é a documentação da REST API feita em Node para o desafio da Asaas Tech Lab.',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
routes(app);
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
