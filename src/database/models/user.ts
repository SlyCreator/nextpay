'use strict';
import {Model,DataTypes} from "sequelize";

import {sequelize} from "./index";

interface UserAttributes {
  id:bigint
  firstName: string
  lastName: string
  email: string
  password:string
}

export default  (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {


        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: bigint
        firstName!: string
        lastName!: string
        email!: string
        password!: string

        static associate(models: any) {
            // define association here
        }
    }

    User.init({
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'Users',
    });
    return User;
}


