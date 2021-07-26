'use strict';
import {Model} from "sequelize";

interface UserAttributes {
  id:bigint
  firstName: string
  lastName: string
  email: string
  password:string
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>
      implements UserAttributes{

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!:bigint
    firstName!: string
    lastName!: string
    email!: string
    password!:string

    static associate(models:any) {
      // define association here
    }
  }
  User.init({
    id:{
      type:DataTypes.BIGINTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false},
    lastName: {type:DataTypes.STRING,
      allowNull: false},
    email: {type:DataTypes.STRING,
      allowNull: false},
    password: {type:DataTypes.STRING,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
