const db = require('../database')

module.exports ={
    addGame: (req, res) => {
        const {title, genre, VGconsole, description, rating} = req.body
        db.query(`
        INSERT INTO games (title, genre, VGconsole, description, rating)
        VALUES(
            '${title}',
            '${genre}',
            '${VGconsole}',
            '${description}',
            '${rating}'
        )
        RETURNING *;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    getGames: (req, res) =>{
        db.query(`
        SELECT * FROM games
        ORDER BY title ASC;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },
    deleteGame: (req, res) =>{
        let {id} = req.params
        db.query(`
        DELETE FROM games WHERE id = ${id};
        SELECT * FROM games
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    titleSearchGame: (req, res) => {
        let {title} = req.params
        db.query(`
        SELECT * FROM games
        WHERE title ILIKE '%${title}%' `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },
    genreSearchGame: (req, res) => {
        let {genre} = req.params
        db.query(`
        SELECT * FROM games
        WHERE genre ILIKE '%${genre}%' `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },
    ratingSearchGame: (req, res) => {
        let {rating} = req.params
        db.query(`
        SELECT * FROM games
        WHERE CAST(rating AS TEXT) LIKE '%${rating}%' `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },
    consoleSearchGame: (req, res) => {

        let {VGconsole} = req.params
        
        db.query(`
        SELECT * FROM games
        WHERE VGconsole ILIKE '%${VGconsole}%' `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.error(err)
        })
    },
}
