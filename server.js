const _ = require('lodash');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');//doRemove
const {ObjectID} = require('mongodb');//doRemove



const {mongoose} = require('./db/mongoose');//doRemove
const {Admin} = require('./models/admin');//doRemove
const {Intern} = require('./models/intern');//doRemove
const url = require('url')


const port = process.env.PORT || 3000;
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

 
app.set('View engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.use(bodyParser.json());//doRemove

//POST Route and deRemove=====================================
app.post('/interns', (req, res) => { 
  var intern = new Intern({
    name: req.body.name,
    designation : req.body.designation,
    bio : req.body.bio,
    hobby : req.body.hobby,
    imageUrl : req.body.imageUrl,
    aim : req.body.aim,
    facebookUrl : req.body.facebookUrl,
    githubUrl : req.body.githubUrl,
    instgramUrl : req.body.instgramUrl,
  });

  intern.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  console.log(req.body);
});

app.post('/admins', (req, res) => { 
  var admin = new Admin({
    email: req.body.email,
    password : req.body.password
  });

  admin.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  console.log(req.body);
});


//GET Route
app.get('/interns', (req, res) => {
  Intern.find().then((interns) => {
    res.send({interns});  
  }, (e) => {
   res.status(400).send(e);
});
});

app.get('/admins', (req, res) => {
  Admin.find().then((admins) => {
    res.send({admins});  
  }, (e) => {
   res.status(400).send(e);
});
});

app.get('/admins/:id', (req, res) => {
   var id = req.params.id;

   if (!ObjectID.isValid(id)) {
    return res.status(404).send('<h1>This Page Does not Exist.</h1>');
   }

   Admin.findById(id).then((admin) => {
    if(!admin) {
      return res.status(404).send();
    }
    res.send({admin});
   }).catch((e) => {
    res.status(404).send();
   });
   
});

app.get('/interns/:id', (req, res) => {
   var id = req.params.id;

   if (!ObjectID.isValid(id)) {
    return res.status(404).send('<h1>This Page Does not Exist.</h1>');
   }

   Intern.findById(id).then((intern) => {
    if(!intern) {
      return res.status(404).send();
    }
    res.send({intern});
   }).catch((e) => {
    res.status(404).send();
   });
   
});

//app.get('/:id', (req, res) => {
 //  var id = req.params.id;
 //  res.render('pritam.hbs');
  // //res.send(id).render('pritam.hbs');
   
//});


//==============================================================

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

app.post('/login', urlencodedParser, (req, res) => {
   if (req.body.email === 'example69@gmail.com' && req.body.password === '12345678'){
    res.render('dashboard.hbs');
   
   } else{
    res.send('Invalid');
   }

  });


app.get('/frontend-profile', (req, res) => {
   res.render('frontend-profile.hbs');
  });

app.get('/backend-profile', (req, res) => {
   res.render('backend-profile.hbs');
  });

app.get('/graphics-profile', (req, res) => {
   res.render('graphics-profile.hbs');
  });

app.post('/dashboard', (req, res) => {
   res.render('dashboard.hbs');
  });

app.get('/edit', (req, res) => {
   res.render('edit.hbs');
  });


app.post('/edit', urlencodedParser, (req, res) => {
  var id=req.body.id;
  var body = _.pick(req.body, ['name', 'designation','bio','hobby','aim','facebookUrl','instgramUrl','githubUrl']);

  Intern.findByIdAndUpdate(id, {$set:body}, {new: true}).then((intern) => {
    if (!intern) {
      return res.status(404).send();
    }

    res.send({intern});
  }).catch((e) => {
    res.status(400).send();
  })

  });

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});