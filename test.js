const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("YYX", "root", "123456", {
  dialect: "mysql",
});
class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

(async () => {
  const users = await User.findAll();
  console.log(users.every((user) => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
  //   await User.destroy({
  //     where: {
  //       id: "2",
  //     },
  //   });
  sequelize.close();
  //   await sequelize.sync();
  //   const jane = await User.create({
  //     username: "janedoe",
  //     birthday: new Date(1980, 6, 20),
  //   });
  //   console.log(jane.toJSON());
})();
