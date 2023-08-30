const titleSearchInput = document.getElementById("title-search-bar")
const genreSearchInput = document.getElementById("genre-search-bar")
const consoleSearchInput = document.getElementById("console-search-bar")
const ratingSearchInput = document.getElementById("rating-search-bar")
const searchResultsContainer = document.getElementById("search-results")

const deleteGame = (id) => {
    console.log(` your item at index ${id} was deleted`)
    axios.delete(`http://localhost:4000/api/deleteGame/${id}`)
    .then((res) =>{
        searchResultsContainer.innerHTML =""
        res.data.forEach(addGame)
    })
    .catch((err) =>{
        console.error(err)
    })
}
const titleSearchGame = (event) => {
    const title = event.target.value
    console.log(title)
    axios
    .get(`http://localhost:4000/api/titleSearchGame/${title}`)
    .then((res) => {
        console.log(res.data)
        searchResultsContainer.innerHTML = ""
        res.data.forEach(showGame)
    })
    .catch((err) =>{
        console.error(`your error is: ${err}`)
    })
}
const genreSearchGame = (event) => {
    const genre = event.target.value
    console.log(genre)
    axios
    .get(`http://localhost:4000/api/genreSearchGame/${genre}`)
    .then((res) => {
        console.log(res.data)
        searchResultsContainer.innerHTML = ""
        res.data.forEach(showGame)
    })
    .catch((err) =>{
        console.error(`your error is: ${err}`)
    })
}

const ratingSearchGame = (event) => {
    const rating = event.target.value
    console.log(rating)
    axios
    .get(`http://localhost:4000/api/ratingSearchGame/${rating}`)
    .then((res) => {
        console.log(res.data)
        searchResultsContainer.innerHTML = ""
        res.data.forEach(showGame)
    })
    .catch((err) =>{
        console.error(`your error is: ${err}`)
    })
}

const consoleSearchGame = (event) => {
    console.log(event)
    const VGconsole = event.target.value
    console.log (VGconsole)
    axios
    .get(`http://localhost:4000/api/consoleSearchGame/${VGconsole}`)
    .then((res) => {
        console.log(res.data)
        searchResultsContainer.innerHTML = ""
        res.data.forEach(showGame)
    })
    .catch((err) =>{
        console.error(`your error is: ${err}`)
    })
}

const showGame = (game) => {
    
    let card = document.createElement('div')
    card.classList += 'game-card'

    let header = document.createElement('div')
    header.classList += 'card-header'

    let info = document.createElement('div')
    info.classList += "game-info"

    let buttons = document.createElement('div')
    buttons.classList += 'buttons'

    searchResultsContainer.appendChild(card)
    card.appendChild(header)
    card.appendChild(info)
    card.appendChild(buttons)

    let title = document.createElement('h3')
    title.setAttribute("id","card-title")
    title.textContent = game.title

    let rating = document.createElement('p')
    rating.setAttribute("id","card-rating")
    rating.setAttribute("class", "card-info")
    rating.textContent = `Rating: ${game.rating}/10`

    let vgconsole = document.createElement('p')
    vgconsole.setAttribute("id","card-console")
    vgconsole.setAttribute("class", "card-info")
    vgconsole.textContent = `Console: ${game.vgconsole}`

    let description = document.createElement('p')
    description.setAttribute("id","card-desc")
    description.setAttribute("class", "card-info")
    description.textContent = `Description: ${game.description}`

    let genre = document.createElement('p')
    genre.setAttribute("id","card-genre")
    genre.setAttribute("class", "card-info")
    genre.textContent = `Genre: ${game.genre}`

   
    header.appendChild(title)
    info.appendChild(rating)
    info.appendChild(vgconsole)
    info.appendChild(description)
    info.appendChild(genre)

    let deleteBtn = document.createElement('p')
    deleteBtn.setAttribute("id", "card-delete")
    deleteBtn.textContent = "X"
    deleteBtn.classList.add('delete-button')

    buttons.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => deleteGame(game.id))
}
titleSearchInput.addEventListener('input', titleSearchGame)
genreSearchInput.addEventListener('input', genreSearchGame)
consoleSearchInput.addEventListener('input', consoleSearchGame)
ratingSearchInput.addEventListener('input', ratingSearchGame)
