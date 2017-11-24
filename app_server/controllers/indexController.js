exports.login = function (req,res){
	var response = {status:'ERROR', message:'User not found'};
	res.send(response);
}

exports.register = function(req,res){
	var response = {status:'SUCCESS', message:'User registered',
					data:{user:{email:"leeseu95@gmail.com"}}};
	res.send(response);
}

exports.session = function(req,res){
	let response = {}
	if (req.session && req.session.email){
		data = {
			email: req.session.email
		}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data;
	}
	else {
		response.status = "ERROR";
		response.status = "User not logged in";
	}
	res.send(response);
}