import fs from 'fs'
import path from 'path'
Date.prototype.Format = function(fmt)  
{ //author: meizz  
    var o = {  
        "M+" : this.getMonth()+1,                 //月份  
        "d+" : this.getDate(),                    //日  
        "h+" : this.getHours(),                   //小时  
        "m+" : this.getMinutes(),                 //分  
        "s+" : this.getSeconds(),                 //秒  
        "q+" : Math.floor((this.getMonth()+3)/3), //季度  
        "S"  : this.getMilliseconds()             //毫秒  
    };  
    if(/(y+)/.test(fmt))  
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));  
    for(var k in o)  
        if(new RegExp("("+ k +")").test(fmt))  
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    return fmt;  
}; 
function getFileList(tempPath){
	let result = [];
	let files = fs.readdirSync(tempPath);
	files.forEach((filename,i)=>{
		let stats = fs.statSync(path.join(tempPath,filename));
		if(stats.isFile()){
			result.push({label: filename,value: filename});
		}else if(stats.isDirectory()){
			let folder = getFileList(path.join(tempPath,filename));
			if(folder.length){
				result.push({
					value: filename,
					label: filename,
					children: folder
				});				
			}
		}			
	})	
	return result;	
}
export default {
	getTemplate(){
		let tempPath = path.resolve(__dirname,"../view");
		return getFileList(tempPath);
	}
}
