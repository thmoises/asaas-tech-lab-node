import Controller from './controller';
import UserServices from '../services/user-services';
import { Request, Response } from 'express';
import { handleError } from '../helpers/error-handler';
import { UserRequestDTO } from '../dtos/user/user-request.dto';
import { createUserSchema } from '../schemas/user-schema';

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      await createUserSchema.validate(body, { abortEarly: false });

      const createUserDTO: UserRequestDTO = { email: body.email };
      const data = await userServices.save(createUserDTO);

      return res.status(200).json({ data, message: `Record created successfully.` });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default UserController;
