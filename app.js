/* 
Import Required Modules
*/
const express = require('express')
const app = express()
const chalk = require('chalk');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const connect = require('./connection/connect.js');
const user = require('./models/user.js');
mongoose.connect('mongodb://localhost:27017/jwt-token', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
var md5 = require('md5');
const jwt = require('jsonwebtoken')

// const myFunction = async ()=>{
//     const token = jwt.sign({_id:'abc123'},'this is new jwt',{expiresIn : '0 seconds'})

//     const data =  jwt.verify(token,'this is new jwt')
//     console.log(data)
// }
// myFunction()
app.post('/login', async (req, res) => {
    try{
    const user = await user.findByCredientials(req.body.email,md5(req.body.password))
    const token = await user.generateAuthToken()
    res.send(user)
    const userData = await user(req.body).save((save, err) => {
        if (err) {
            console.log(err);
            res.send(400, 'Bad Request');
            return;
        }
    })
    res.send({ "status": 200, "user": userData });
    return;
})
app.listen(3005);
console.log("Server Listening at 3005");