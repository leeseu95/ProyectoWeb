// exports.login = function (req,res){
// 	var response = {status:'ERROR', message:'User not found'};
// 	res.send(response);
// }

exports.login = function (req,res){
	db.get().query('SELECT * FROM users where email ="'+ req.body.email + '" and password= "'+ req.body.password+'");', function(err, rows) {

		var response = {};
		var data = [];
		
		if (err) {
			response.status = 'ERROR';
			response.message = err;
		}
	
		if(rows && rows.length > 0) {
			response.status = 'SUCCESS';
			response.message = 'User logged in';
			var data = {
				email: rows[0].email
			}
			req.session.email = data.email;
			response.data = data;
		} else {
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}

exports.register = function(req,res){
	var response = {status:'SUCCESS', message:'User registered',
					data:{user:{email:"leeseu95@gmail.com"}}};
	res.send(response);
}

exports.session = function(req,res){
	let response = {}
	if (req.session && req.session.email){
		var data = {
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