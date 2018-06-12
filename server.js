const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
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

app.get('/portfolio', (req, res) => {
   res.render('portfolio-home.hbs');
	});

app.get('/portfolio/frontend-team', (req, res) => {
   res.render('frontend-team.hbs');
	});

app.get('/portfolio/backend-team', (req, res) => {
   res.render('backend-team.hbs');
	});

app.get('/portfolio/graphics-team', (req, res) => {
   res.render('graphics-team.hbs');
	});

app.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
