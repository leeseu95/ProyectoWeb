exports.login = function (req,res){
	var response = {status:'ERROR', message:'User not found'};
	res.send(response);
}

exports.register = function(req,res){
	var response = {status:'SUCCESS', message:'User registered',
					data:{user:{email:"Eduardo"}}};
	res.send(response);
}