const form = document.getElementById("add-form")
const gameTitle = document.getElementById("title-bar")
const gameGenre = document.getElementById("genre-bar")
const VGconsole = document.getElementById("console-bar")
const gameDesc = document.getElementById("desc-bar")
const gameRating = document.querySelectorAll('input[name="rating"]')
const gameBoxart = document.getElementById("game-img")

const addGame = (event) => {
    event.preventDefault()

    let selectedRating;
    gameRating.forEach(input => {
        if (input.checked) {
            selectedRating = input.value;
        }
    });

    let newGame={
        title: gameTitle.value,
        genre: gameGenre.value, 
        VGconsole: VGconsole.value, 
        description: gameDesc.value,
        rating: selectedRating,
    }
    console.log(newGame)
    axios.post('http://localhost:4000/api/addGame', newGame)
    .then((res) => {
        console.log(res.data)
        alert(`Added ${gameTitle.value} to List`)
        form.reset()
    })
    .catch((err) =>{
        console.error(`your error is: ${err}`)
    })
}

form.addEventListener('submit', addGame)