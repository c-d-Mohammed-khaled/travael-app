/* ـــــــــــــــــــــــــــــــــــــــــــ */
                 /* Requirements */
/* ـــــــــــــــــــــــــــــــــــــــــــ */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'))
/* ـــــــــــــــــــــــــــــــــــــــــــ */
                 /* Server Setup */
/* ـــــــــــــــــــــــــــــــــــــــــــ */
const port = 8080
const server = app.listen(port, listening)
function listening() {
    console.log(`The server is running on localhost:${port}`)
}

/* ـــــــــــــــــــــــــــــــــــــــــــ */
                 /* App Routes */
/* ـــــــــــــــــــــــــــــــــــــــــــ */
const appData = {}

app.post('/addCity', (req, res) => {
    console.log(req.body)
    appData.city = req.body.city,
    appData.country = req.body.country,
    appData.lat = req.body.lat,
    appData.lng = req.body.lng,
    res.send(appData)
})

app.post('/addWeather', (req, res) => {
    console.log(req.body)
    appData.weather = req.body.weather
    res.send(appData)
})

app.post('/addPicture', (req, res) => {
    console.log(req.body)
    appData.picture = req.body.picture
    res.send(appData)
})

app.get('/result', (req, res) => {
    res.send(appData)
})