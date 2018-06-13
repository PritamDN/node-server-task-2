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

app.get('/about-us', (req, res) => {
   res.render('about.hbs');
	});


app.get('/frontend-team', (req, res) => {
   res.render('frontend-team.hbs');
	});

app.get('/backend-team', (req, res) => {
   res.render('backend-team.hbs');
	});

app.get('/graphics-team', (req, res) => {
   res.render('graphics-team.hbs');
	});

app.get('/login', (req, res) => {
   res.render('login.hbs');
	});

app.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
