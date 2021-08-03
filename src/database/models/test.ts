import {
    Model,
    DataTypes,
    Optional,
} from "sequelize";
import {sequelize} from "./index";
//const sequelize = new Sequelize("postgres://root:pass1234@localhost:5432/fiverr");

// These are all the attributes in the User model
interface UserAttributes {
    id: number;
    name: string;
    preferredName: string | null;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public preferredName!: string | null; // for nullable fields

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
// You can write `extends Model<AddressAttributes, AddressAttributes>` instead,
// but that will do the exact same thing as below



User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        preferredName: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    },
    {
        tableName: "users",
        sequelize, // passing the `sequelize` instance is required
    }
);


async function doStuffWithUser() {
    const newUser = await User.create({
        name: "Johnny",
        preferredName: "John",
    });
    console.log(newUser.id, newUser.name, newUser.preferredName);


    const ourUser = await User.findByPk(1, {
        include: [User.associations.projects],
        rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    });

    // Note the `!` null assertion since TS can't know if we included
    // the model or not
  //  console.log(ourUser.projects![0].name);
}

export default User;
