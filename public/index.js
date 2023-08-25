const gamesList = document.getElementById('games-container')

const createCard = (game) => {
    let card = document.createElement('div')
    card.classList += 'game-card'

    let cardHeader = document.createElement('div')
    cardHeader.classList += 'game-header'

    let options = document.createElement('div')
    options.classList += 'game-options'

    let gameName = document.createElement('h3')
    gameName.textContent = game.name

    card.appendChild(cardHeader)
    cardHeader.appendChild(taskName)
    cardHeader.appendChild(options)

    let description = document.createElement('p')
    description.textContent = task.description
    card.appendChild(description)
    list.appendChild(card)
}

const getGames = () => {
    axios.get('http://localhost:4000/api/getGames')
    .then((res) => {
        console.log(res.data)
        res.data.forEach(createCard)
    })
    .catch((err) => {
        console.error(err)
    })
}

getGames()