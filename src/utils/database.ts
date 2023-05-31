import { Sequelize, DataTypes, Model } from 'sequelize';
import { APP_NAME } from '../config';

// Create a Sequelize instance with SQLite dialect
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./data/${APP_NAME?.toLowerCase()}.db`,
  logging: false,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('INFO: Database connected');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

// Define the model for the data you want to save
interface SettingModelAttributes {
  name: string;
  value: string;
}

class SettingModel extends Model<SettingModelAttributes> implements SettingModelAttributes {
  public name!: string;
  public value!: string;
}

SettingModel.init(
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'tbl_settings',
  },
);

export default sequelize;
export { SettingModel };
