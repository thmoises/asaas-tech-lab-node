import { Router, Request, Response } from 'express';
import PaymentController from '../controllers/payment-controller';

const paymentController = new PaymentController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment management
 */

/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Cria um registro de pagamento
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerAccount:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Nome do cliente.
 *                     example: John Doe
 *                   cpfCnpj:
 *                     type: string
 *                     description: CPF/CNPJ do cliente.
 *                     example: 12345678900
 *               billingType:
 *                 type: string
 *                 description: Tipo de cobrança.
 *                 example: BOLETO
 *               value:
 *                 type: number
 *                 description: Valor.
 *                 example: 100.50
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 description: Data de vencimento.
 *                 example: 2024-08-15T19:41:15.816Z
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
 *                     customerAccount:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           description: Nome do cliente.
 *                           example: John Doe
 *                         cpfCnpj:
 *                           type: string
 *                           description: CPF/CNPJ do cliente.
 *                           example: 12345678900
 *                     billingType:
 *                       type: string
 *                       description: Tipo de cobrança.
 *                       example: BOLETO
 *                     value:
 *                       type: number
 *                       description: Valor.
 *                       example: 100.50
 *                     dueDate:
 *                       type: string
 *                       format: date-time
 *                       description: Data de vencimento.
 *                       example: 2024-08-15T19:41:15.816Z
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                   example: Record created successfully.
 */
router.post('/payment', (req: Request, res: Response) => paymentController.create(req, res));

export default router;