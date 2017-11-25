var db = require('../../db');
var Blog = require('../models/blogModel');

exports.getAll = function(req,res){
    console.log('SELECT * FROM blog')
    db.get().query('SELECT * FROM blog', function(err, rows) {
        var response = {};
        var data = [];

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }

        if (rows && rows.length > 0) {
            for (var i=0; i<rows.length; i++){
                var blog = new Blog(rows[i].id_blog, rows[i].title,
                rows[i].content, rows[i].author, rows[i].date);
                data.push(blog);
            }
            response.status = 'SUCCESS';
            response.message = '';
            response.data = data;
        }

        else {
            response.status = 'ERROR';
            response.message = 'No hay registros';
        }
        res.send(response.data);
    })
}

// exports.insert = function(req,res) {
//     //if (req.session.email) {}
//     console.log('insert into stations (nombre, direccion, latitud, longitud, precio1, precio2, calidad, servicio, visitas) values ("'+req.body.nombre+'","'+req.body.direccion+'",'+ req.body.latitud +',' + req.body.longitud+','+req.body.precio1+','+req.body.precio2+ ','+req.body.calidad+','+req.body.servicio+',1);');
//     db.get().query('insert into stations (nombre, direccion, latitud, longitud, precio1, precio2, calidad, servicio, visitas) values ("'+req.body.nombre+'","'+req.body.direccion+'",'+ req.body.latitud +',' + req.body.longitud+','+req.body.precio1+','+req.body.precio2+ ','+req.body.calidad+','+req.body.servicio+',1);', function(err, result) {

//         var response = {};
//         var data = {};

//         if (err) {
//             response.status = 'ERROR';
//             response.message = err;
//         }
//         else {
//             data.insertId = result.insertId;
//             response.status = 'SUCCESS';
//             response.message = '';
//             response.data = data;
//         }
//         res.send(response);
//     })
// }