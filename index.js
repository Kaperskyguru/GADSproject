const bodyParser = require('body-parser');
const express = require('express');
const { JSend } = require('jsend-express');
const routes = require('./route/api');
const db = require('./model/dbs');
require('dotenv').config();

const app = express();
const jsend = new JSend({ name: 'Jointly', release: '1', version: '0.0.1' });
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jsend.middleware.bind(jsend));
app.use('/', routes);

db.sync({ force: false }).then(() => {
	console.log('sycn well');
});

app.listen(PORT || 5000, err => {
	if (!err) console.log('reading from port 5000');
});
