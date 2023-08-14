require('dotenv').config({path: '../.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

app.get("/api/players", cors(), async (req,res) => {
    const url = 'https://api-nba-v1.p.rapidapi.com/players?' + new URLSearchParams({
        team: req.query.team,
        season: req.query.season
    });

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        res.json(result)
    } catch (error) {
        console.error(error);
    }
})

app.get("/api/team/", cors(), async (req,res) => {
    const url = 'https://api-nba-v1.p.rapidapi.com/teams?' + new URLSearchParams({
        code: req.query.code
    });

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        res.json(result)
    } catch (error) {
        console.error(error);
    }
})


app.listen(port, () => {
    console.log('Listening at http://localhost:'+ port)
})