const mongoose = require('mongoose'); //we import this module in order to connect to the // DEBUG:

mongoose.connect('mongodb://localhost:27017/Contacts', { useNewUrlParser: true }, (err) => { //this will help to build up the connection, we will have the mongodb protocol the localhost with default port number and the db name
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err ) }
});

require('./members.model');
