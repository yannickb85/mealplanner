var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Repas = require('./api/models/planificateurModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/planificateurrepasdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




var routes = require('./api/routes/planificateurRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('planificateur de repas RESTful API server demarree sur: ' + port);