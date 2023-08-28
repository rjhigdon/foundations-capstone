const db = require('../database')

module.exports ={
    addGame: (req, res) => {
        const {title, genre, console, description, rating} = req.body
        db.query(`
        INSERT INTO games (title, genre, console, description, rating)
        VALUES(
            '${title}',
            '${genre}',
            '${console}',
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
    }
}





















































// module.exports = {
//     addGame: (req, res) => {
//         const {title, genre, console, description} = req.body
//         console.log(req.body)
//         db.query(`
//         isnsert into games (title, genre, console, description)
//         VALUES (
//             '${title}'
//             '${genre}'
//             '${console}'
//             '${description}'
//         )
//         RETURNING *;
//         `)
//         .then((dbRes) => {
//             res.status(200).send(dbRes[0])
//         })
//     },
//     getGames: (req, res) => {
//         db.query(`
//         SELECT * FROM games
//         ORDER BY title ASC;
//         `)
//         .then((dbRes) => {
//             res.staus(200).send(dbRes[0])
//         })
//     },
//     deleteGame: (req, res) => {
//         let {id} = req.params
//         db.query(`
//         DELETE FROM games WHERE id = ${id};
//         SELECT * FROM games;
//         `)
//         .then((dbRes) => {
//             res.status(200).send(dbRes[0])
//         })
//     }
    

// }