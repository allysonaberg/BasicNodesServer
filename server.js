//creating a simple REST api with node.js and express

var express = require('express'),
    route1 = require('./routes/route1'),
    route2 = require('./routes/route2');

var app = express();

//telling express to only allow static pages in the public directory to be showed
app.use(express.static(__dirname + '/public'));
app.use('/route1', route1);
app.use('/route2', route2);

//the get method is for when it gets a route, request = url, response = what to send back
//ie: specifying the response when it gets a route
// app.get('/', (req, res) => {
//     res.send('hello')
// });

app.listen(3000)
