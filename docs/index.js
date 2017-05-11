var express = require('express');
var app = express();
var engine = require('ejs-locals');

app.use(express.static('./../lib'));
app.use(express.static('./node_modules'));
app.use(express.static('./scripts'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/globals', function (req, res) {
  res.render('pages/globals/index');
});

app.get('/components', function (req, res) {
  res.render('pages/components/index');
});

app.get('/react', function (req, res) {
  res.render('pages/react/index');
});

app.get('/:folder/:page', function (req, res) {
  res.render('pages/' + req.params.folder + '/' + req.params.page);
});

app.listen(8282, function () {
  console.log('Access the doc in http://localhost:8282!');
});

livereload = require('livereload');
server = livereload.createServer({exts: ['css', 'js', 'ejs']});
server.watch(['./../lib', './views']);
