import sequelize from "../data/data.js";
import Sequelize from "sequelize";
const Info = sequelize.define('info', {
  id: {
  	type: Sequelize.INTEGER,
  	field: "id",
  	autoIncrement: true,
  	primaryKey: true,
  	allowNull: false
  },
  realname: {
    type: Sequelize.STRING(50),
  },
  sex: {
  	type: Sequelize.STRING(10),
  },
  birthday: {
  	type: Sequelize.DATE,
  },
  address_now: {
  	type: Sequelize.STRING(100),
  },
  address_old: {
  	type: Sequelize.STRING(100),
  },
  zhiye: {
  	type: Sequelize.STRING(30),
  },
  company: {
  	type: Sequelize.STRING(30),
  },
  qianming: {
  	type: Sequelize.STRING(100),
  },
  descs: {
  	type: Sequelize.STRING(100),
  },
  tags: {
  	type: Sequelize.STRING(100),
  }  
}, 
{
  freezeTableName: false,
  createdAt: false,
  updatedAt: false,
  tableName: "tuch_user_info"
});
export default Info;
