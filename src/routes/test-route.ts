import { Router, Request, Response } from 'express';
import TestController from '../controllers/test-controller';

const testController = new TestController();

const router = Router();

router.get('/test', (req: Request, res: Response) => testController.findAll(req, res));
router.get('/test/:id', (req: Request, res: Response) => testController.findById(req, res));
router.post('/test', (req: Request, res: Response) => testController.create(req, res));
router.put('/test/:id', (req: Request, res: Response) => testController.update(req, res));
router.delete('/test/:id', (req: Request, res: Response) => testController.delete(req, res));

export default router;
