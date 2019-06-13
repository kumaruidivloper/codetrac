const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://kumar:kumar1234@cluster0-t6xml.mongodb.net/test?retryWrites=true"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!', + err)
    } else {
        console.log('connected to mongodb')
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    } 
    let token = req.headers.authorization.split(' ')[1]
    console.log(token);
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    jwt.verify(token, 'secretKey', function(err, payload) {
             if(err){
                 return res.status(401).send('Unauthorized request')
             }else{
                 req.userId = payload.subject
                 next()       
            }    
          }); 
    //let payload = jwt.verify(token, 'secretKey');

    //console.log(payload);
    // try{
    //  let payload = jwt.verify(token, 'secretKey');
    // }catch(err) {  
    //   console.log('inside error');
    //   return res.status(401).send('Unauthorized request');
    // }
    //if(!payload) {
        //return res.status(401).send('Unauthorized request')
    //}
    //req.userId = payload.subject
    //next()
}


router.get('/', (req, res) => {
    res.send('From API Route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).sent(registeredUser)
        }
    })
});

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/dashboard', verifyToken, (req, res) => {
    let dashboard = [
        {
            "id": 1,
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "id": 2,
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "id": 3,
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]

    res.json(dashboard)
})

module.exports = router