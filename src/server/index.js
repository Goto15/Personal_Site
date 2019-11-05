const express = require('express');
const app = express();

const matchRoutes = require('./src/routes/matchRoutes');
const playerRoutes = require('./src/routes/playerRoutes');
const tournamentRoutes = require('./src/routes/tournamentRoutes');

const PORT = 8080;


app.get('/', (req, res) =>
    res.send(`Epic Ratings up on:  ${PORT}`)
);

app.use('/api', matchRoutes);
app.use('/api', playerRoutes);
app.use('/api', tournamentRoutes);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)
