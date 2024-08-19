import { Request, Response } from 'express';
import Services from '../services/services';
import { ControllerInterface } from '../types/controller.interface';
import { handleError } from '../helpers/error-handler';

class Controller implements ControllerInterface {
  private readonly entityService: Partial<Services>;

  constructor(entityService: Partial<Services>) {
    this.entityService = entityService;
  }

  async findAll(req: Request, res: Response) {
    try {
      const data = await this.entityService.findAll?.();
      return res.status(200).json({ data });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.entityService.findById?.(Number(id));
      return res.status(200).json(data);
    } catch (error) {
      return handleError(res, error);
    }
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    try {
      const data = await this.entityService.create?.(body);
      return res.status(200).json({ data, message: `Record created successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      const isUpdated = await this.entityService.update?.(body, Number(id));
      if (!isUpdated) {
        return res.status(400).json({ message: 'Unable to change the record.' });
      }

      return res.status(200).json({ message: `Record updated successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this.entityService.delete?.(Number(id));
      return res.status(200).json({ message: `Record deleted successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default Controller;
