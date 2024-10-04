import { Request, Response } from 'express';

class HealthCheckController {

  get(req: Request, res: Response) {
    return res.status(200).json({ message: `OK.` });
  }
}

export default HealthCheckController;
