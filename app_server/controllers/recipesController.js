var db = require('../../db');
var Recipes = require('../models/recipesModel');

exports.getAll = function(req,res){
    console.log('SELECT * FROM recipes')
    db.get().query('SELECT * FROM recipes', function(err, rows) {
        var response = {};
        var data = [];

        if (err) {
            response.status = 'ERROR';
            response.message = err;
        }

        if (rows && rows.length > 0) {
            for (var i=0; i<rows.length; i++){
                var recipes = new Recipes(rows[i].id_recipes, rows[i].title,
                rows[i].ingredients, rows[i].content, rows[i].date, rows[i].imageURL);
                data.push(recipes);
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
