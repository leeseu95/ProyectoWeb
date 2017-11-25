function restaurantsModel(id_restaurants, name, information, lat, longit){
    this.id_restaurants = id_restaurants;
    this.name = name;
    this.information = information;
    this.lat = lat;
    this.longit = longit;
  }

module.exports = restaurantsModel;