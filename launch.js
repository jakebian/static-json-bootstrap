var express = require('express');
var app = express();

var content = require('./content/content');

var PORT = 3000;

app.set('view engine','jade');

app.use(express.static('public'));

app.get('/',renderRoot);

app.listen(PORT,logConnectMessage)



function renderRoot(req, res) {
    res.render('index', {content: content});
}

function logConnectMessage() {
    console.log('CUTC home running on port ' + PORT);
}