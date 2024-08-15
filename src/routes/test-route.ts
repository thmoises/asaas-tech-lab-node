import { Router, Request, Response } from 'express';
import TestController from '../controllers/test-controller';

const testController = new TestController();

const router = Router();

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

/**
 * @swagger
 * /test/{id}:
 *   get:
 *     summary: Retorna um registro testes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do registro.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID.
 *                   example: 7
 *                 name:
 *                   type: string
 *                   description: Name.
 *                   example: Sou um teste
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação.
 *                   example: 2024-08-15T19:41:15.816Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Data de atualização.
 *                   example: 2024-08-15T19:41:15.816Z
 */
router.get('/test/:id', (req: Request, res: Response) => testController.findById(req, res));

/**
 * @swagger
 * /test:
 *   post:
 *     summary: Cria um registro teste
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome do registro teste.
 *                 example: Sou um teste
 *     responses:
 *       200:
 *         description: Registro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID.
 *                       example: 7
 *                     name:
 *                       type: string
 *                       description: Name.
 *                       example: Sou um teste
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de atualização.
 *                       example: 2024-08-15T19:41:15.816Z
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de criação.
 *                       example: 2024-08-15T19:41:15.816Z
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                   example: Registro criado com sucesso.
 */
router.post('/test', (req: Request, res: Response) => testController.create(req, res));

/**
 * @swagger
 * /test/{id}:
 *   put:
 *     summary: Altera um registro teste
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do registro.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: O nome do registro teste.
 *                 example: Sou um teste
 *     responses:
 *       200:
 *         description: Registro alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                   example: Registro alterado com sucesso.
 */
router.put('/test/:id', (req: Request, res: Response) => testController.update(req, res));

/**
 * @swagger
 * /test/{id}:
 *   delete:
 *     summary: Deleta um registro teste
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do registro.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                   example: Registro deletado com sucesso.
 */
router.delete('/test/:id', (req: Request, res: Response) => testController.delete(req, res));

export default router;
