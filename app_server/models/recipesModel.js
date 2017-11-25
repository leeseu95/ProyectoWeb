function recipesModel(id_recipes, title, ingredients, content, date, imageURL){
    this.id_recipes = id_recipes;
    this.title = title;
    this.ingredients = ingredients;
    this.content = content;
    this.date = date;
    this.imageURL = imageURL;
  }

module.exports = recipesModel;