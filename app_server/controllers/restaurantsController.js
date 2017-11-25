var db = require('../../db');
var Restaurants = require('../models/restaurantsModel');

exports.getAll = function(req,res){
    console.log('SELECT * FROM restaurants')
    db.get().query('SELECT * FROM restaurants', function(err, rows) {
        var response = {};
        var data = [];

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }

        if (rows && rows.length > 0) {
            for (var i=0; i<rows.length; i++){
                var restaurants = new Restaurants(rows[i].id_restaurants, rows[i].name,
                rows[i].information, rows[i].lat, rows[i].longit);
                data.push(restaurants);
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
