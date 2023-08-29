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
    title.textContent = game.title
    let genre = document.createElement('p')
    genre.textContent = game.genre
    let vgconsole = document.createElement('p')
    vgconsole.textContent = game.vgconsole
    let description = document.createElement('p')
    description.textContent = game.description
    let rating = document.createElement('p')
    rating.textContent = game.rating
    
    
    header.appendChild(title)
    info.appendChild(genre)
    info.appendChild(vgconsole)
    info.appendChild(description)
    info.appendChild(rating)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.classList.add('delete-button')
    
    buttons.appendChild(deleteBtn)
    
    deleteBtn.addEventListener('click', () => deleteGame(game.id))
}
titleSearchInput.addEventListener('input', titleSearchGame)
genreSearchInput.addEventListener('input', genreSearchGame)
consoleSearchInput.addEventListener('input', consoleSearchGame)
ratingSearchInput.addEventListener('input', ratingSearchGame)
