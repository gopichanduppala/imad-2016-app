var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  'article-one' : {
      title:'Article one | uppala gopichand',
      heading:'Article one',
      date:'sep 27,2016',
      content:`
             <p>
                 this is content for my first article.this is content for my first article.this is content for my first article.this is content for my first article.
             </p>
             <p>
                 this is content for my first article.this is content for my first article.this is content for my first article.this is content for my first article.
             </p>
             <p>
                 this is content for my first article.this is content for my first article.this is content for my first article.this is content for my first article.
             </p>`
  },
  'article-two' : {
      title:'Article two | uppala gopichand',
      heading:'Article two',
      date:'sep 28,2016',
      content:`
             <p>
                 this is content for my second article.
             </p>
             <p>
                 this is content for my second article.
             </p>
             <p>
                 this is content for my second article.
             </p>`
  },
  'article-three' : {
      title:'Article three | uppala gopichand',
      heading:'Article three',
      date:'sep 29,2016',
      content:`
             <p>
                 this is content for my third article.
             </p>
             <p>
                 this is content for my third article.
             </p>
             <p>
                 this is content for my third article.
             </p>`}
};
  

function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmltemplate = `
    <html>
        <head>
           <title>
              ${title}
           </title>
           <link href="/ui/style.css" rel="stylesheet" />
       </head> 
       <body>
           <div class='container'>
           <div>
              <a href="/">home</a>
           </div>
          <hr/>
           <h3>
              ${heading}
           </h3>
           <div>
              ${date}
           </div>
           <div>
             ${content}
           </div>
           </div>
       </body>
    </html>
`;
  return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/;Articlename',function(req,res){
    // articlename == article-one
    // articles[articlename] == () content of article one
    var articlename = rel.params.articlename;
    res.send(createtemplate(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
