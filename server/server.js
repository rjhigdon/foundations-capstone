const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')
 const {addGame, getGames, deleteGame} = require('./controllers/games')

const app = express()
app.use(express.json())
app.use(cors())
app.post('/api/seed', seed)

app.post('/api/addGame', addGame)
app.get('/api/getGames', getGames)
app.delete('/api/deleteGame/:id', deleteGame)


db.sync()

app.listen(4000, () => console.log('running on 4000... YEEHAW'))