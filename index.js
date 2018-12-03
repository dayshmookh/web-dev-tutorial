var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));


// -----

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// -----



app.get('/', function (req, res) {
    res.render('homepage');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/products', function(req,res){
    // console.log(req.query);
    res.render('products');
});

// app.get('/red', function (req, res) {
//     res.send("Hello red!")
// })

app.listen(port, function () {
    console.log('App listening on port ' + port + '...');
});