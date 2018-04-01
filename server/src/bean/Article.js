import sequelize from "../data/data.js";
import Sequelize from "sequelize";
const Article = sequelize.define('article', {
  id: {
  	type: Sequelize.INTEGER,
  	field: "id",
  	autoIncrement: true,
  	primaryKey: true,
  	allowNull: false
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  seotitle: {
  	type: Sequelize.STRING(50)
  },
  description: {
  	type: Sequelize.TEXT
  },
  img: {
  	type: Sequelize.STRING(100)
  },
  content: {
  	type: Sequelize.TEXT
  },
  keywords: {
  	type: Sequelize.STRING(50)
  },
  publish_time: {
  	type: Sequelize.BIGINT,
  	allowNull: false
  },
  edit_time: {
  	type: Sequelize.BIGINT,
  	allowNull: false
  },
  source: {
  	type: Sequelize.STRING(100),
  	defaultValue: "TUCH"
  },
  author: {
  	type: Sequelize.STRING(30),
  	defaultValue: "TUCH"
  },
  hit: {
  	type: Sequelize.INTEGER,
  	defaultValue: 0
  }
}, 
{
  freezeTableName: false,
  createdAt: false,
  updatedAt: false,
  tableName: "tuch_article"
});

export default Article;
