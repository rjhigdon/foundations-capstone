const list = document.getElementById('games-container')

const deleteGame = (id) => {
    axios.delete(`http://localhost:4000/api/deleteGame/${id}`)
    .then((res) =>{
        list.innerHTML =""
        res.data.forEach(addGame)
        alert(`Game Deleted`)
    })
    .catch((err) =>{
        console.error(err)
    })
}

const addGame = (game) => {

    let card = document.createElement('div')
    card.classList += 'game-card'

    let header = document.createElement('div')
    header.classList += 'card-header'

    let info = document.createElement('div')
    info.classList += "game-info"

    let buttons = document.createElement('div')
    buttons.classList += 'buttons'

    list.appendChild(card)
    card.appendChild(header)
    card.appendChild(info)
    card.appendChild(buttons)

    let title = document.createElement('h3')
    title.textContent = game.title

    let rating = document.createElement('p')
    rating.textContent = game.rating

    let VGconsole = document.createElement('p')
    VGconsole.textContent = game.VGconsole

    let description = document.createElement('p')
    description.textContent = game.description

    let genre = document.createElement('p')
    genre.textContent = game.genre

   
    header.appendChild(title)
    info.appendChild(rating)
    info.appendChild(VGconsole)
    info.appendChild(description)
    info.appendChild(genre)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.classList.add('delete-button')

    buttons.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => deleteGame(game.id))

}

const getGames = () => {
    axios.get('http://localhost:4000/api/getGames', )
    .then((res) => {
        console.log(res.data)
        res.data.forEach(addGame)
    })
    .catch((err) => {
        console.error(`Your error is: ${err}`)
    })
}

getGames()
