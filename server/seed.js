const db = require('./database')

const seed = () => {
    db.query(`
        CREATE TABLE games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(20),
            genre VARCHAR(20),
            console VARCHAR(20),
            description VARCHAR(250),
            rating INTEGER
        );
    `).then(() => {
        console.log("your db is seeded :)")
    })
}

module.exports = seed