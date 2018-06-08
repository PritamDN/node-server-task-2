const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('View engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) => {
   res.render('home.hbs');
	});

app.get('/about', (req, res) => {
   res.render('about.hbs');
	});

app.listen(3000, () => {
	console.log('Running at 3000');
});
