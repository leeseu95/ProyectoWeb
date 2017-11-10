var db = require('../../db.js');
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