// Import Article

var Article = require ('./Article.js');

// Pass the values to the constructor method of Article
const a = new Article.Article (
  {
    title: "This is the title!",
    author: "Me",
    text: "This is an example article!"
  }
);

// Shows its HTML on the console
console.log(a.render() );
