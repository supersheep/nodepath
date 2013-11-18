var exec = require("child_process").exec;


module.exports = function(callback){
	exec("npm prefix -g",function(err,stdout,stderr){
		callback && callback(stdout.trim());
	});
}