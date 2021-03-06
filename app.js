var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    engine = require('ejs-mate'),
    path = require('path'),
    connectAssets = require('connect-assets'),
    logger = require('morgan');

var routes = require('./routes/routes');

// Define a port for node to run in. Take either a custom port when deployed, or default to 3000
app.set('port', process.env.PORT || 3000);
// Define the template engine
app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // this line allows you to render ejs

// Cleans up how file is referenced in the templating engine
// https://www.npmjs.com/package/connect-assets
// The assets in this case will be ~/public/* since they're needed client side
app.use(connectAssets({
    paths: [
        path.join(__dirname, 'public/css'),
        path.join(__dirname, 'public/dev'),
        path.join(__dirname, 'public/fonts'),
        path.join(__dirname, 'public/images'),
        path.join(__dirname, 'public/support'),
        path.join(__dirname, 'public/js')
    ]
}));

// Similar as connect assets, but requires the raw path to be put for src and href
// It's backup incase some html isn't being rendered using the ejs engine
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use bodyParser to parse incoming requests to server
// https://github.com/expressjs/body-parser
app.use(bodyParser.json()); // parses only json objects
app.use(bodyParser.urlencoded({
    extended: true // allow foor rich json objects and arrays
}));

// Routes
app.use('/', routes);

app.listen(app.get('port'), function () {
    console.log('\nExpress listening on port %d in %s mode \n\n\n',
        app.get('port'), app.get('env'));
});