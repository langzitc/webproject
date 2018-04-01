import sequelize from "./src/data/data.js"
import User from './src/bean/User.js'
import Role from './src/bean/Role.js'
import Info from './src/bean/Info.js'
import Chanel from './src/bean/Chanel.js'
import Article from './src/bean/Article.js'
import Talk from './src/bean/Talk.js'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import session from 'express-session'
import router from './src/router.js'
import RedisFactory from './src/data/rds.js'
const app = express();
User.belongsTo(Role,{foreignKey: "roleid"});
User.belongsTo(Info,{foreignKey: "infoid"});
Article.belongsTo(Chanel,{foreignKey: "cid"});
Talk.belongsTo(Article,{foreignKey: "aid"});
Talk.belongsTo(User,{foreignKey: "toid"});
Talk.belongsTo(User,{foreignKey: "fromid"});
sequelize.sync({force: false}).then(function () {
console.log("数据库同步成功");
});
app.use(session({
    secret: 'ilue igauto',
    cookie: {maxAge: 1800000},  //设置maxAge是1800000ms，即30分钟后session和相应的cookie失效过期
    rolling: true,
    resave:true,
    saveUninitialized: false
}));
app.use("/apidoc",express.static('apidoc'));
app.use("/upload",express.static(path.join("../", 'upload')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", 'ejs');
app.set('views', __dirname + '/src/view');
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
app.use('/',router);
app.listen(4000);
