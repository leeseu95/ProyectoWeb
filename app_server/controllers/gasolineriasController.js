var db = require('../../db');
var Gasolineria = require('../models/gasolineria');

exports.getAll = function(req,res){
    console.log('SELECT * FROM stations')
    db.get().query('SELECT * FROM stations', function(err, rows) {
        var response = {};
        var data = [];

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }

        if (rows && rows.length > 0) {
            for (var i=0; i<rows.length; i++){
                var gasolineria = new Gasolineria(rows[i].id, rows[i].nombre,
                rows[i].direccion, rows[i].latitud, rows[i].longitud,
                rows[i].precio1, rows[i].precio2, rows[i].calidad,
                rows[i].servicio, rows[i].visitas);
                data.push(gasolineria);
            }
            response.status = 'SUCCESS';
            response.message = '';
            response.data = data;
        }

        else {
            response.status = 'ERROR';
            response.message = 'No hay registros';
        }
        res.send(response);
    })
}

exports.insert = function(req,res) {
    console.log('insert into stations (nombre, direccion, latitud, longitud, precio1, precio2, calidad, servicio, visitas) values ("'+req.body.nombre+'","'+req.body.direccion+'",'+ req.body.latitud +',' + req.body.longitud+','+req.body.precio1+','+req.body.precio2+ ','+req.body.calidad+','+req.body.servicio+',1);');
    db.get().query('insert into stations (nombre, direccion, latitud, longitud, precio1, precio2, calidad, servicio, visitas) values ("'+req.body.nombre+'","'+req.body.direccion+'",'+ req.body.latitud +',' + req.body.longitud+','+req.body.precio1+','+req.body.precio2+ ','+req.body.calidad+','+req.body.servicio+',1);', function(err, result) {

        var response = {};
        var data = {};

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }
        else {
            data.insertId = result.insertId;
            response.status = 'SUCCESS';
            response.message = '';
            response.data = data;
        }
        res.send(response);
    })
}