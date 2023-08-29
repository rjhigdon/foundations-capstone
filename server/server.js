const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')
const {addGame, getGames, deleteGame, titleSearchGame, genreSearchGame, consoleSearchGame, ratingSearchGame} = require('./controllers/games')

const app = express()
app.use(express.json())
app.use(cors())
app.post('/api/seed', seed)

app.post('/api/addGame', addGame)
app.get('/api/getGames', getGames)
app.get('/api/titleSearchGame/:title', titleSearchGame)
app.get('/api/genreSearchGame/:genre', genreSearchGame)
app.get('/api/consoleSearchGame/:VGconsole', consoleSearchGame)
app.get('/api/ratingSearchGame/:rating', ratingSearchGame)
app.delete('/api/deleteGame/:id', deleteGame)


db.sync()

app.listen(4000, () => console.log('running on 4000... YEEHAW'))