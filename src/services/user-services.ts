import dataSource from '../models';
import Services from './services';
import { UserRequestDTO } from '../dtos/user/user-request.dto';
import { ErrorTypesEnum } from '../enums/error-types-enum';
import { generateToken } from '../config/auth';

class UserServices extends Services {
  constructor() {
    super('User');
  }

  public async save(data: UserRequestDTO) {
    await this.validateUserCreation(data);

    return this.create({ ...data, apiKey: generateToken(data.email) });
  }

  public async findByEmail(email: string) {
    return dataSource['User'].findOne({ where: { email } });
  }

  private async validateUserCreation(data: UserRequestDTO) {
    const existingUser = await this.findByEmail(data.email);
    if (existingUser) throw new Error(ErrorTypesEnum.ALREADY_EXISTS);
  }
}

export default UserServices;
