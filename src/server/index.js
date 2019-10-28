const bodyParser = require('body-parser');
const express = require('express');
const Sequelize = require('sequelize');

const playerRoutes = require('./src/routes/playerRoutes');


const app = express();
const PORT = 8080;


// Create connection to SQLite DB
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './ratings.db',
    define: {
        timestamps: false
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to DB established.');
    })
    .catch(err => {
        console.error('Unable to connect to the db: ', err);
    });

// Define the Column structure of the Players table
const Player = sequelize.define('Player', {
    //Columns
    IGN: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    Elo: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    IRL_Name: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

//Find all players
Player.findAll().then(players => {
    console.log("All players: ", JSON.stringify(players, null, 4));
});

Player.findAll({
    where: {
        IGN: 'BeneBeats'
    }
}).then(player => {
    console.log('Player: ', JSON.stringify(player, null, 4));
});

//Bodyparser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) =>
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.use('/api', playerRoutes);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)