const mongoose = require('mongoose');
var connect = function() {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/project-node', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}, (error, result) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            console.log('project-node successfully connected!');
            return resolve(true);
        });
    });
};
module.exports = {
    connect: connect
};