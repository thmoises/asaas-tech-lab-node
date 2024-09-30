import { Router, Request, Response } from 'express';
import PaymentController from '../controllers/payment-controller';

const paymentController = new PaymentController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Gerenciamento de Cobranças
 */

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Lista todos os registros de pagamento
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalCount:
 *                   type: number
 *                   description: Número total de registros.
 *                   example: 100
 *                 limit:
 *                   type: number
 *                   description: Limite de registros por página.
 *                   example: 10
 *                 offset:
 *                   type: number
 *                   description: Deslocamento para paginação.
 *                   example: 0
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       value:
 *                         type: number
 *                         description: Valor.
 *                         example: 100.50
 *                       dueDate:
 *                         type: string
 *                         format: date-time
 *                         description: Data de vencimento.
 *                         example: 2024-08-15
 *                       description:
 *                         type: string
 *                         description: Descrição do pagamento.
 *                         example: Pagamento referente ao serviço X.
 *                       billingType:
 *                         type: string
 *                         description: Tipo de cobrança.
 *                         example: BOLETO
 *                       status:
 *                         type: string
 *                         description: Status do pagamento.
 *                         example: PENDING
 *                       customer:
 *                         type: string
 *                         description: ID do cliente.
 *                         example: cus_000006227230
 */
router.get('/payments', (req: Request, res: Response) => paymentController.findAll(req, res));

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
 *               customer:
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
 *               description:
 *                 type: string
 *                 description: Descrição do pagamento.
 *                 example: Pagamento referente ao serviço X.
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
 *                     value:
 *                       type: number
 *                       description: Valor.
 *                       example: 100.50
 *                     dueDate:
 *                       type: string
 *                       format: date-time
 *                       description: Data de vencimento.
 *                       example: 2024-08-15T19:41:15.816Z
 *                     description:
 *                       type: string
 *                       description: Descrição do pagamento.
 *                       example: Pagamento referente ao serviço X.
 *                     billingType:
 *                       type: string
 *                       description: Tipo de cobrança.
 *                       example: BOLETO
 *                     status:
 *                       type: string
 *                       description: Status do pagamento.
 *                       example: PENDING
 *                     customer:
 *                       type: string
 *                       description: ID do cliente.
 *                       example: cus_000006227230
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                   example: Record created successfully.
 */
router.post('/payment', (req: Request, res: Response) => paymentController.create(req, res));

export default router;
