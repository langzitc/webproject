import sequelize from "../data/data.js";
import md5 from 'md5';
import config from '../../config/sys'
import util from '../util'
let Role = sequelize.model("role");
let Info = sequelize.model("info");
let User = sequelize.model("user");
let Chanel = sequelize.model("chanel");
let Article = sequelize.model("article");
function login(req){
	let password = md5(req.body.password);
	return sequelize.query(`select * from tuch_user where password = '${password}' and tel = '${req.body.username}' or email = '${req.body.username}'`, 	{type:sequelize.QueryTypes.SELECT });
}
function restfuleGet(req,res){
	switch(req.params.param){
		/**
		 * @api {get} /rolelist 角色列表
		 * @apiName rolelist
		 * @apiGroup public
		 *
		 * @apiParam {String} tocken 密钥	 
		 */			
		case "rolelist":
			(async ()=>{
				let roleList = await Role.findAll();
				res.json({
					code: 200,
					data: roleList
				});
			})();
		break;
		/**
		 * @api {get} /userlist 用户列表
		 * @apiName userlist
		 * @apiGroup public
		 *
		 * @apiParam {String} tocken 密钥	 
		 */				
		case "userlist":
			(async ()=>{
				let page = req.query.page;
				let offset = parseInt(req.query.size);
				let limit = page*offset-offset;
				let list = await User.findAndCountAll({
				  limit: offset,
				  offset: limit,
				  where: {
				  	id: {
				  		$ne: 1
				  	}
				  },
				  include: [{
				  	model: Role,
				  	as: "role"
				  },{
				  	model: Info,
				  	as: "info"
				  }]
				});
				res.json(list);
			})();
		break;
		/**
		 * @api {get} /citylist 城市列表
		 * @apiName citylist
		 * @apiGroup public 
		 */				
		case "citylist":
			(async ()=>{	
				let pid = req.query.pid||0;
				let list = await Area.areaList(pid);
				res.json({
					code: 200,
					msg: "查询成功",
					data: list
				});
			})();			
		break;
		default:
			res.json({
				msg: "接口错误",
				code: 404
			});
		break;
	}
}
function restfulePost(req,res){
	switch(req.params.param){
		/**
		 * @api {post} /login 登录接口
		 * @apiName Login
		 * @apiGroup public
		 *
		 * @apiParam {String} password 密码
		 * @apiParam {String} username  用户名
		 * @apiSuccess {String} msg 消息
		 * @apiSuccess {String} code 状态码
		 *
		 * @apiSuccessExample Success-Response:
		 *     HTTP/1.1 200 OK
		 *     {
		 *       "code": "200",
		 *       "msg": "查询成功"
		 *     }
		 *
		 * @apiError Denial  无权限.
		 *
		 * @apiErrorExample Error-Response:
		 *     HTTP/1.1 404 Not Found
		 *     {
		 *       "msg": "接口错误",
		 *       "code": "404",
		 *     }		 
		 */		
		case "login":
			(async()=>{
				try{
					console.log(req.session.tocken);
					let result = await login(req);
					let data = {};
					if(result.length){
						data.data = result[0];
						data.msg = "登录成功";
						data.code = 200;
						req.session.tocken = (new Date()).getTime()+""+data.data.tel;
						data.data.tocken = req.session.tocken;
					}else{
						data.msg = "登录失败";
						data.code = 500;
					}
					res.json(data);
				}catch(e){
					res.json({
						code: 500,
						msg: "系统错误"
					});
					throw new Error(e);
				}
			})();
		break;
		/**
		 * @api {post} /destroy 注销
		 * @apiName destroy
		 * @apiGroup public
		 *
		 * @apiParam {String} tocken 密钥
		 *
		 * @apiSuccessExample Success-Response:
		 *     HTTP/1.1 200 OK
		 *     {
		 *       "code": "200",
		 *       "msg": "注销成功"
		 *     }
		 *		 
		 */			
		case "destory":
			req.session.tocken = null;
			res.json({
				code: 200,
				msg: "注销成功"
			});
		break;
		/**
		 * @api {post} /register 注册
		 * @apiName register
		 * @apiGroup public
		 *
		 * @apiParam {String} tel 手机
		 * @apiParam {String} email 邮箱
		 *
		 * @apiSuccessExample Success-Response:
		 *     HTTP/1.1 200 OK
		 *     {
		 *       "code": "200",
		 *       "msg": "注册成功"
		 *     }
		 *		 
		 */				
		case "register":
			(async ()=>{
				let flag = await sequelize.query(`SELECT * FROM TUCH_USER WHERE TEL = ${req.body.tel} OR EMAIL = '${req.body.email}'`, 				{type:sequelize.QueryTypes.SELECT });
				if(flag.length){
					res.json({
						code: 203,
						msg: "手机号或邮箱已存在"
					});
				}else{
					let role = await Role.findById(1);
					let info = Info.build();
					let user = User.build({
					    tel: req.body.tel,
					    password: md5(req.body.password),
					    email: req.body.email,
					    regtime: (new Date()).getTime(),
					    exptime: (new Date()).getTime(),
					});			
					await user.save();
					await info.save();
					await user.setRole(role);				
					await user.setInfo(info);
					res.json({
						code: 200,
						msg: "添加成功"
					});
				}
							
			})();
		break;
		case "addchanel":
			(async ()=>{
				let data = JSON.parse(JSON.stringify(req.body));
				delete data.tocken;
				let flag = await Chanel.create(data);
				res.json({
					code: 200,
					msg: "添加栏目成功"
				});				
			})();
		break;
		case "storytypeadd":
			(async ()=>{
				let data = JSON.parse(JSON.stringify(req.body));
				delete data.tocken;
				let flag = await StoryType.create(data);
				res.json({
					code: 200,
					msg: "添加分类成功"
				});				
			})();			
		break;
		case "storytypedel": 
			(async ()=>{
				let f = await StoryType.destroy({
					where: {
						id: req.body.id
					}
				});
				if(f){
					res.json({
						code: 200,
						msg: "删除成功"
					});					
				}else{
					res.json({
						code: 500,
						msg: "删除失败"
					});					
				}
			})();
		break;
		case "storytypeedit": 
			(async ()=>{
				let m = await StoryType.findById(req.body.id);
				let d = await m.updateAttributes(req.body);
				if(d){
					res.json({
						code: 200,
						msg: "更新成功"
					});					
				}else{
					res.json({
						code: 500,
						msg: "更新失败"
					});					
				}
			})();
		break;	
		case "addtask":
			(async ()=>{
				let data = JSON.parse(JSON.stringify(req.body));
				delete data.tocken;
				let col = await Collection.build(data);
				await col.save();
				res.json({
					code: 200,
					msg: "添加任务成功"
				});					
			})();
		break;
		default:
			res.json({
				msg: "接口错误",
				code: 404
			});
		break;
	}
}
export default function (req,res,next) {
	let flag = config.externalroute.includes(req.params.param);
	if(!flag){
		if(!(req.session.tocken&&req.query.tocken&&req.session.tocken===req.query.tocken)){
			res.json({
				code: 202,
				msg: "用户未登录"
			});
		}
	}else{
		if(req.method === "POST") {
			restfulePost(req,res,next);	
		}else{
			restfuleGet(req,res,next);
		}		
	}	
};