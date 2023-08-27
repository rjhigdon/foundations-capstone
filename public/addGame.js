console.log("hello game")
const form = document.getElementById("add-form")
const gameTitle = document.getElementById("title-bar")
const gameGenre = document.getElementById("genre-bar")
const gameConsole = document.getElementById("console-bar")
const gameDesc = document.getElementById("desc-bar")

const addGame = (event) => {
    event.preventDefault
    const newGame= {
        title: gameTitle.value,
        genre: gameGenre.value,
        console: gameConsole.value,
        description: gameDesc.value, 
    }
    console.log(addGame)
    axios.psot('http://localhost:4000/api/addGame', newGame)
    .then((res) => {
        console.log(res.data)
    })
    .cathc((err) => {
        console.error(err)
    })
}

form.addEventListener('submit', addGame)