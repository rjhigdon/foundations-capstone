const db = require('./database')

const seed = () => {
    db.query(`
        CREATE TABLE games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(30),
            genre VARCHAR(50),
            VGconsole VARCHAR(20),
            description VARCHAR(500),
            rating INTEGER
        );
    `).then(() => {
        console.log("your db is seeded :)")
    })
}

module.exports = seed