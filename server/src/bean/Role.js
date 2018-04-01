import sequelize from "../data/data.js";
import Sequelize from "sequelize";
const Role = sequelize.define('role', {
  id: {
  	type: Sequelize.INTEGER,
  	field: "id",
  	autoIncrement: true,
  	primaryKey: true,
  	allowNull: false
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  code: {
  	type: Sequelize.STRING(50),
  	allowNull: false
  }
}, 
{
  freezeTableName: false,
  createdAt: false,
  updatedAt: false,
  tableName: "tuch_role" 
});
export default Role;
