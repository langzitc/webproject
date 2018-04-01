import redis from 'redis';
import config from "../../config/db.js";
const client = redis.createClient(config.rds_port,config.rds_host,{});    
client.auth(config.rds_pwd,function(){    
        console.log('redis通过认证');    
});    
client.on('connect',function(){    
        client.set('author', 'Wilson',redis.print);    
        client.get('author', redis.print);    
        console.log('connect');    
});    
client.on('ready',function(err){    
        console.log('redis ready');    
});  
export default client;
