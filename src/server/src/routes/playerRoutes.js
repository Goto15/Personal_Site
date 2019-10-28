const express = require('express');
const router = express.Router();

const playerRouter = require('../controllers/playerController');

router.get('/player', function (req, res, next){
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
}, (req, res) => {
    res.send("Get Player successful");
});

router.get('/player:IGN', function (req, res){
    res.send("Get Player IGN successful")
});

router.get('/tournament', function (req, res){
    res.send("Get Tournament successful")
});

module.exports = router