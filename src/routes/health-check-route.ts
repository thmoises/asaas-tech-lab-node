import { Router, Request, Response } from 'express';

import HealthCheckController from '../controllers/health-check-controller';

const healthCheckController = new HealthCheckController();

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Gerenciamento de Cobranças
 */

/**
 * @swagger
 * /healthcheck:
 *   get:
 *     summary: Status da aplicação
 *     tags: [HealthCheck]
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso
 */
router.get('/healthcheck', (req: Request, res: Response) => healthCheckController.get(req, res));

export default router;
