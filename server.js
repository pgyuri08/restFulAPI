require('./models/db');

const express = require('express'); //import the express module
const path = require('path'); //import path module | it provides utilities for working with file and directory paths
const exphbs = require('express-handlebars');//this helps to minimize time to write code, it's a lightweight templating system foor Node
const bodyparser = require('body-parser');

const membersController = require('./controllers/membersController') //request statement for employecontroller

var app = express(); // wee call the express function through the variable
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/')); //specified the directory for the views | 2nd param where directory is the base directory connected to our views directory
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));//specify the engine of the handlebars | it will have an object for handlebars with the configuration details
app.set('view engine', 'hbs');

app.listen(3000, () => { //in order to start the server we call the listen function first param is the port number and 2nd is the call back function
  console.log('Express server started at port : 3000');
});

app.use('/members', membersController ); //here we call this use model function and exported the contactsController from the Router
