import { DataTypes, Model, Sequelize } from 'sequelize';

class CUser extends Model {
  public id!: number;
  public email!: string;
  public apiKey!: string;
}

const User = (sequelize: Sequelize) => {
  CUser.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      apiKey: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return CUser;
};

export default User;
