import express from 'express';
import Public from './api/common.js'
import Client from './api/client.js'
import Server from './api/server.js'
import multer from 'multer'
import fs from 'fs'
import path from "path"
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	let paths = path.resolve("../upload",(new Date()).Format("yyyy-MM-dd"));
  	let flag = fs.existsSync(paths);
  	if(!flag){
  		fs.mkdirSync(paths);
  	}
    cb(null, paths);
  },
  filename: function (req, file, cb) {
  	let arr = file.originalname.split(".");
  	let prefix = arr[arr.length-1];
    cb(null, (new Date()).getTime()+"."+prefix);
  }
})
let upload = multer({ storage: storage });
const router = express.Router();
router.use((err, req, res, next) => { 
return res.json({'code': 500, 'msg':err.stack})
});
/**
 * @api {post} /upload/fileupload 文件上传
 * @apiName upload
 * @apiGroup public
 *
 * @apiParam {String} tocken 密钥
 * @apiParam {File} file 文件
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "msg": "上传成功",
 *       "path": "***.png",
 *     }
 *		 
 */	
router.post("/api/public/upload/fileupload",upload.single('file'),(req,res,next)=>{
	if(req.session.tocken&&req.body.tocken&&req.session.tocken===req.body.tocken){
		let a = req.file.path;
		let c = a.split("web");
		let d = c[1].replace(/\\/g,"/");
		res.json({
			code: 200,
			msg: "上传成功",
			path: d
		});
	}else{
		res.json({
			code: 202,
			msg: "用户未登录"
		});
	}
})
router.use('/api/public/:param', Public);
router.use('/api/server/:param', Server);
router.use('/api/client/:param', Client);
export default router;