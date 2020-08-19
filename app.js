const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');

const stuffRoutes = require('./route/stuff');

const app = express();

mongoose.connect(
	'mongodb+srv://new_user_alpha01:eGooj6DO9YNaWmFc@clustersergio.eemrt.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then( () => console.log('MongoDb connexion success') )
.catch( () => console.log('MongoDb connexion failed') );

app.use(bodyParser.json());

app.use(
	(req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
		next();
	}
)

app.use('/api/stuff', stuffRoutes);


module.exports = app;
