const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = "mongodb+srv://kumar:kumar1234@cluster0-t6xml.mongodb.net/test?retryWrites=true"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!', + err)
    } else {
        console.log('connected to mongodb')
    }
})


router.get('/', (req, res) => {
    res.send('From API Route')
})


module.exports = router