import express from 'express';
import sequelize from "../data/data.js";
const router = express.Router();
let Chanel = sequelize.model("chanel");
let Article = sequelize.model("article");
export default function (req,res,next){
	switch(req.params.param){
		/**
		 * @api {get} /chanellist 栏目列表
		 * @apiName chanellist
		 * @apiGroup public
		 *
		 */			
		case "chanellist":
			(async ()=>{
			let type = parseInt(req.query.type);	
			let list = await Chanel.chanelList(req.query.rid,type);	
			res.json({
				code: 200,
				msg: "查询成功",
				data: list
			});				
			})();
		break;
		/**
		 * @api {get} /articlelist 文章列表
		 * @apiName articlelist
		 * @apiGroup public
		 *
		 * @apiParam {Number} page 页码
		 * @apiParam {Number} size 大小
		 */			
		case "articlelist":
			(async ()=>{			
				let page = req.query.page;
				let offset = parseInt(req.query.size);
				let limit = page*offset-offset;
				let list = await Article.findAndCountAll({
				  limit: offset,
				  offset: limit,
				  where: {
				  	id: {
				  		$ne: 1
				  	}
				  },				  
				  include: [{
				  	model: StoryType,
				  	as: "storytype"
				  }]
				});
				res.json(list);
			})();			
		break;		
		default:
			res.json({
				msg: "接口错误",
				code: 404
			});
		break;
	}	
};