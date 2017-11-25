function blogModel(id_blog, title, content, author, date){
    this.id_blog = id_blog;
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
  }

module.exports = blogModel;