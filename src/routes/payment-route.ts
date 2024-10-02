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
 * /payment/{id}:
 *   get:
 *     summary: Retorna um registro de pagamento pelo ID
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do registro de pagamento.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registro de pagamento retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 object:
 *                   type: string
 *                   description: Tipo do objeto.
 *                   example: payment
 *                 id:
 *                   type: string
 *                   description: ID do pagamento.
 *                   example: pay_alivbltgxxxxxx
 *                 dateCreated:
 *                   type: string
 *                   format: date
 *                   description: Data de criação do pagamento.
 *                   example: 2024-06-11
 *                 customer:
 *                   type: string
 *                   description: ID do cliente.
 *                   example: cus_0000000000000
 *                 installment:
 *                   type: string
 *                   description: ID da parcela.
 *                   example: 80942bb5-2bb8-48e5-9e1f-fa305xxxxxxxxxx
 *                 paymentLink:
 *                   type: string
 *                   description: Link de pagamento.
 *                   example: null
 *                 value:
 *                   type: number
 *                   description: Valor do pagamento.
 *                   example: 50
 *                 netValue:
 *                   type: number
 *                   description: Valor líquido do pagamento.
 *                   example: 48.52
 *                 originalValue:
 *                   type: number
 *                   description: Valor original do pagamento.
 *                   example: null
 *                 interestValue:
 *                   type: number
 *                   description: Valor dos juros.
 *                   example: null
 *                 description:
 *                   type: string
 *                   description: Descrição do pagamento.
 *                   example: Parcela 2 de 2.
 *                 billingType:
 *                   type: string
 *                   description: Tipo de cobrança.
 *                   example: UNDEFINED
 *                 pixTransaction:
 *                   type: string
 *                   description: Transação PIX.
 *                   example: null
 *                 status:
 *                   type: string
 *                   description: Status do pagamento.
 *                   example: OVERDUE
 *                 dueDate:
 *                   type: string
 *                   format: date
 *                   description: Data de vencimento.
 *                   example: 2024-07-12
 *                 originalDueDate:
 *                   type: string
 *                   format: date
 *                   description: Data de vencimento original.
 *                   example: 2024-07-12
 *                 paymentDate:
 *                   type: string
 *                   format: date
 *                   description: Data de pagamento.
 *                   example: null
 *                 clientPaymentDate:
 *                   type: string
 *                   format: date
 *                   description: Data de pagamento pelo cliente.
 *                   example: null
 *                 installmentNumber:
 *                   type: number
 *                   description: Número da parcela.
 *                   example: 2
 *                 invoiceUrl:
 *                   type: string
 *                   description: URL da fatura.
 *                   example: https://sandbox.asaas.com/i/alivbltxxxxxxx
 *                 invoiceNumber:
 *                   type: string
 *                   description: Número da fatura.
 *                   example: 05860000
 *                 externalReference:
 *                   type: string
 *                   description: Referência externa.
 *                   example: 103753000
 *                 deleted:
 *                   type: boolean
 *                   description: Indica se o pagamento foi deletado.
 *                   example: false
 *                 anticipated:
 *                   type: boolean
 *                   description: Indica se o pagamento foi antecipado.
 *                   example: false
 *                 anticipable:
 *                   type: boolean
 *                   description: Indica se o pagamento é antecipável.
 *                   example: false
 *                 creditDate:
 *                   type: string
 *                   format: date
 *                   description: Data de crédito.
 *                   example: null
 *                 estimatedCreditDate:
 *                   type: string
 *                   format: date
 *                   description: Data estimada de crédito.
 *                   example: null
 *                 transactionReceiptUrl:
 *                   type: string
 *                   description: URL do recibo da transação.
 *                   example: null
 *                 nossoNumero:
 *                   type: string
 *                   description: Nosso número.
 *                   example: 1681263
 *                 bankSlipUrl:
 *                   type: string
 *                   description: URL do boleto bancário.
 *                   example: https://sandbox.asaas.com/b/pdf/alixxxxxxxxx
 *                 lastInvoiceViewedDate:
 *                   type: string
 *                   format: date
 *                   description: Data da última visualização da fatura.
 *                   example: null
 *                 lastBankSlipViewedDate:
 *                   type: string
 *                   format: date
 *                   description: Data da última visualização do boleto.
 *                   example: null
 *                 discount:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: number
 *                       description: Valor do desconto.
 *                       example: 0
 *                     limitDate:
 *                       type: string
 *                       format: date
 *                       description: Data limite para o desconto.
 *                       example: null
 *                     dueDateLimitDays:
 *                       type: number
 *                       description: Dias limite para o desconto.
 *                       example: 0
 *                     type:
 *                       type: string
 *                       description: Tipo de desconto.
 *                       example: FIXED
 *                 fine:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: number
 *                       description: Valor da multa.
 *                       example: 0
 *                     type:
 *                       type: string
 *                       description: Tipo de multa.
 *                       example: PERCENTAGE
 *                 interest:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: number
 *                       description: Valor dos juros.
 *                       example: 0
 *                     type:
 *                       type: string
 *                       description: Tipo de juros.
 *                       example: PERCENTAGE
 *                 postalService:
 *                   type: boolean
 *                   description: Indica se o serviço postal foi utilizado.
 *                   example: false
 *                 custody:
 *                   type: string
 *                   description: Custódia.
 *                   example: null
 *                 refunds:
 *                   type: string
 *                   description: Reembolsos.
 *                   example: null
 *       404:
 *         description: Registro de pagamento não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro.
 *                   example: Payment record not found.
 */
router.get('/payment/:id', (req: Request, res: Response) => paymentController.getById(req, res));

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
