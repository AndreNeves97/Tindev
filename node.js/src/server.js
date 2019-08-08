const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

const username = 'admin';
const password = 'admin';
const dbname = 'omnistack';

mongoose.connect(`mongodb+srv://${username}:${password}@testes-thkpq.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});


server.use(cors());
server.use(express.json());
server.use(routes);



server.listen(3333);
