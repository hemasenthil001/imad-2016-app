var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' :
        {
            title : 'Article One - Hema',
            header : 'Article-One',
            date : 'sept 5 , 2016',
            content : ` <p>This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.</p>
                    
                    <p>This is the second para.This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.</p>`
            },
'article-two' : 
        {      
            title : 'Article Two - Hema',
            header : 'Article-Two',
            date : 'sept 10 , 2016',
            content : ` <p>This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.</p>
                    
                    <p>This is the second para.This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.</p>`},
'article-three' :
        {           
            title : 'Article Three - Hema',
            header : 'Article-Three',
            date : 'sept 15 , 2016',
            content : ` <p>This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.This is the first paragraph.This is the first paragraph.This is the first paragraph.
                    This is the first paragraph.</p>
                    
                    <p>This is the second para.This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.
                    This is the second para.This is the second para.This is the second para.This is the second para.</p>`
            
        }
};

function createTemplate(data) {
    var title=data.title;
    var header=data.header;
    var date=data.date;
    var content=data.content;
    var htmlTemplate =
    `
        <html>
            <head>
                <title>${title} </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <section class="container">
                
                <a href="/">Back</a>
                <hr>
                <h1>${header}</h1>
                <h3>${date}</h3>
                
                ${content}
                </section>
            </body>
        
         </html>
    `;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName=article-one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
