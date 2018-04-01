import sequelize from "../data/data.js";
import Sequelize from "sequelize";
const Talk = sequelize.define('talk', {
  id: {
  	type: Sequelize.INTEGER,
  	field: "id",
  	autoIncrement: true,
  	primaryKey: true,
  	allowNull: false
  },  
  content: {
  	type: Sequelize.TEXT
  },
  pid: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }
}, 
{
  freezeTableName: false,
  createdAt: true,
  updatedAt: true,
  tableName: "tuch_talk"
});

export default Talk;
