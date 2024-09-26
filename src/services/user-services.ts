import { v4 as uuidv4 } from 'uuid';
import dataSource from '../models';
import Services from './services';
import Encoder from '../config/encoder';
import { UserRequestDTO } from '../dtos/user/user-request.dto';
import { ErrorTypesEnum } from '../enums/error-types-enum';

class UserServices extends Services {
  private apiKeyEncoder = Encoder;

  constructor() {
    super('User');
  }

  public async save(data: UserRequestDTO) {
    await this.validateUserCreation(data);

    const apiKey = uuidv4();
    const encodedApiKey = await this.apiKeyEncoder.encode(apiKey);
    return this.create({ ...data, apiKey: encodedApiKey });
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
