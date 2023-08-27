const db = require('./database')

const seed = () => {
    db.query(`
        CREATE TABLE tasks (
            id SERIAL PRIMARY KEY,
            title VARCHAR(30),
            genre VARCHAR(30),
            console VARCHAR(30),
            description VARCHAR(400),

        );
    `).then(() => {
        console.log('your db is Seeded :)')
    })
}

module.exports = seed