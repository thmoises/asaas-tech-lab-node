import { Router, Request, Response } from 'express';
import UserController from '../controllers/user-controller';

const userController = new UserController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [User]
 *     summary: Cria um registro de usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do registro de usuário.
 *                 example: user@example.com
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
 *                     email:
 *                       type: string
 *                       description: Email.
 *                       example: user@example.com
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
 *                   example: Record created successfully.
 */
router.post('/users', (req: Request, res: Response) => userController.create(req, res));

export default router;
