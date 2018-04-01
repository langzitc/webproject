import sequelize from "../data/data.js";
import Sequelize from "sequelize";
import Role from './Role.js';
const User = sequelize.define('user', {
  id: {
  	type: Sequelize.INTEGER,
  	field: "id",
  	autoIncrement: true,
  	primaryKey: true,
  	allowNull: false
  },
  tel: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
  	type: Sequelize.STRING(50),
  	allowNull: false
  },
  weixin: {
  	type: Sequelize.STRING(50),
  },
  qq: {
  	type: Sequelize.BIGINT
  },
  regtime: {
  	type: Sequelize.BIGINT,
  	allowNull: false  	
  },
  avastar: {
  	type: Sequelize.STRING(100)
  },
  nick: {
  	type: Sequelize.STRING(20)
  },
  exptime: {
  	type: Sequelize.BIGINT,
  	allowNull: false
  },
  tocken: {
  	type: Sequelize.STRING(100),
  },
  flag: {
  	type: Sequelize.BOOLEAN,
  	defaultValue: false
  }
}, 
{
  freezeTableName: false, // Model 对应的表名将与model名相同
  createdAt: false,
  updatedAt: false,
  tableName: "tuch_user"
});
export default User;
