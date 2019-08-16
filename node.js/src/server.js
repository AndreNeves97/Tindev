const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const httpServer = express();
const server = require('http').Server(httpServer);  



const io = require('socket.io')(server);

httpServer.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

const connectedUsers = {};


const username = 'admin';
const password = 'admin';
const dbname = 'omnistack';

mongoose.connect(`mongodb+srv://${username}:${password}@testes-thkpq.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log('Mongodb Connected...');



    httpServer.use(cors());

    httpServer.use(express.json());
    httpServer.use(routes);


    io.on('connection', socket => {
        /**
         * @param socket.handshake.query.user - Id do usuário
         */

        const { user } = socket.handshake.query;
        connectedUsers[user] = socket.id;

        console.log('user conectado', user);
    });



    server.listen(3333);


    mongoose.connection.db.collections().then((result) => {
        console.log(result[0].s.name);
    });
});
