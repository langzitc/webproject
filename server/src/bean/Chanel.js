import sequelize from "../data/data.js";
import Sequelize from "sequelize";
const Chanel = sequelize.define('chanel', {
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
  	type: Sequelize.STRING(50),
  },
  description: {
  	type: Sequelize.STRING(100),
  },
  keywords: {
  	type: Sequelize.STRING(100),
  },
  imgs: {
  	type: Sequelize.STRING(100),
  },
  orders: {
  	type: Sequelize.INTEGER,
  	defaultValue: 0
  },
  hottype: {
  	type: Sequelize.INTEGER,
  	defaultValue: 0
  },
  chaneltype: {
  	type: Sequelize.BOOLEAN,
  	defaultValue: true
  },
  rechanelid: {
  	type: Sequelize.INTEGER,
  	defaultValue: 0
  },
  istop: {
  	type: Sequelize.BOOLEAN,
  	defaultValue: false
  }
}, 
{
  freezeTableName: false,
  createdAt: false,
  updatedAt: false,
  tableName: "tuch_chanel"
});
Chanel.chanelList = async function(rid = 0,type = 0){
	let list = await Chanel.findAll();
	let list2 = Array.from(list);
	let reset = function(arrs,rid = 0){
		let a = [];
		arrs.forEach((e)=>{
			if(e.rechanelid === rid){
				let el = {};
				let c = reset(arrs,e.id);
				if(c.length){
					el.children = Array.from(c);
				}
				if(type === 0){
					el.label = e.title;
					el.value = e.id;
					a.push(el);						
				}else{
					el.title = e.title;
					el.id = e.id;
					el.expand = false;
					el.checked = false;
					el.istop = e.istop;
					el.chaneltype = e.chaneltype;
					a.push(el);	
				}
			}
		})		
		return a;
	}
	let arr = type === 0 ? [{value: 0,label: "根栏目",children: reset(list2)}] : [{chaneltype: false,istop: true, id: 0,title: "根栏目",expand: false,checked: false,children: reset(list2)}];
	return arr;
}
export default Chanel;
