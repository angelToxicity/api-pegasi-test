var express = require('express');
var app = express();
var config = require('./config');
var router = require('./routes')
require('./db')

app.set('port', process.env.PORT);
app.use('/api', router);

app.listen(app.get('port'), () => {
    console.log(`Server is up and listening on: ${app.get('port')}`);
});