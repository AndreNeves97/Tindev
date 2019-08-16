const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(req.connectedUsers);

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({
                error: 'Dev not exists'
            });
        }

        
        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            console.log("MATCH");
            if(loggedSocket) {
                console.log('user', loggedDev, loggedSocket)
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if(targetSocket) {
                console.log('target', targetDev, targetSocket)
                req.io.to(targetSocket).emit('match', loggedDev)
            }
        }

        loggedDev.likes.push(targetDev._id);
        
        await loggedDev.save();

        return res.json(loggedDev);


    }
};