import {Request, Response} from 'express';

export interface ControllerInterface {
    findAll(req: Request, res: Response): Promise<unknown>;

    findById(req: Request, res: Response): Promise<unknown>;

    create(req: Request, res: Response): Promise<unknown>;

    update(req: Request, res: Response): Promise<unknown>;

    delete(req: Request, res: Response): Promise<unknown>;
}
