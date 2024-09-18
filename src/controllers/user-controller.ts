import Controller from './controller';
import UserServices from '../services/user-services';
import { Request, Response } from 'express';
import { handleError } from '../helpers/error-handler';
import { CreateUserDTO } from '../dtos/user/create-user.dto';

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async create(req: Request, res: Response) {
    const body = req.body;
    const createUserDTO: CreateUserDTO = { email: body.email };

    try {
      const data = await userServices.save(createUserDTO);
      return res.status(200).json({ data, message: `Record created successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    return res.status(501).json({ message: 'Not Implemented' });
  }

  async delete(req: Request, res: Response) {
    return res.status(501).json({ message: 'Not Implemented' });
  }
}

export default UserController;
