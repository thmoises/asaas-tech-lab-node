import { Model, DataTypes, Sequelize } from 'sequelize';

class CTest extends Model {
  public id!: number;
  public name!: string;

  static associate(_models: Record<string, typeof Model>) {
    // Test.hasMany<typeof models.NAMEMODULE>(models.NAMEMODULE, {
    //     foreignKey: 'id_other_table'
    // });
    // Test.hasMany<typeof models.NAMEMODULE>(models.NAMEMODULE, {
    //     foreignKey: 'id_other_table',
    //     as: 'other_table'
    // });
  }
}

const Test = (sequelize: Sequelize) => {
  CTest.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Test',
    }
  );

  return CTest;
};

export default Test;
