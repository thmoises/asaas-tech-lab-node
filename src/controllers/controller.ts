import {Request, Response} from 'express';
import Services from "../services/services";
import {ControllerInterface} from "../types/controller.interface";
import {handleError} from '../help/error-handler';

class Controller implements ControllerInterface {
    private readonly entidadeService: Partial<Services>;

    constructor(entidadeService: Partial<Services>) {
        this.entidadeService = entidadeService;
    }

    async findAll(req: Request, res: Response) {
        try {
            const data = await this.entidadeService.findAll?.();
            return res.status(200).json(data);
        } catch (error) {
            return handleError(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const data = await this.entidadeService.findById?.(Number(id));
            return res.status(200).json(data);
        } catch (error) {
            return handleError(res, error);
        }
    }

    async create(req: Request, res: Response) {
        const body = req.body;
        try {
            const data = await this.entidadeService.create?.(body);
            return res.status(200).json({data, mensagem: `Registro criado com sucesso.`});
        } catch (error) {
            return handleError(res, error);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;
        const body = req.body;
        try {
            const isUpdated = await this.entidadeService.update?.(body, Number(id));
            if (!isUpdated) {
                return res.status(400).json({mensagem: 'Não foi possível alterar o registro.'});
            }

            return res.status(200).json({mensagem: `Registro alterado com sucesso.`});
        } catch (error) {
            return handleError(res, error);
        }
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        try {
            await this.entidadeService.delete?.(Number(id));
            return res.status(200).json({mensagem: `Registro deletado com sucesso.`});
        } catch (error) {
            return handleError(res, error);
        }
    }
}

export default Controller;
