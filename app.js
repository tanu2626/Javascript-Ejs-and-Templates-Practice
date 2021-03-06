var express = require("express");
var app = express();

// Routes are here

app.get("/", function(req, res) {

  // our code will render a file called home.ejs
  // so we need to make a file
  // make a folder called views, and make that file there
  res.render("home.ejs");
});

//fall in love with flowers
app.get("/fallinlovewith/:thing", function(req, res) {
 //defined ejs thingVar HERE
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Tanu"},
    {title: "My favourite flower is Rose", author: "Tanus"},
    {title: "My favourite flower is Lotus", author: "Manisha"},
    {title: "My favourite flower is Sun Flower", author: "Love"},
  ];

  res.render("posts.ejs", {posts: posts});
})

//fall in love with roses


// tell express to listen for requests, we use this command

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
