// ------------------------------//
// ----- Import Dependencies ----//
// ------------------------------//
require("dotenv").config() // load variables from .env
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override") // import method-override
const pokemon = require('./models/pokemon') // import DATA
const { urlencoded } = require("body-parser")
const PORT = process.env.PORT || 3000
const parseFormObj = require('./public/parseFormObj') // import function to parse form data

// -------------------------------//
// -- Create Express App Object --//
// -------------------------------//
const app = express()


// ------------------------------//
// --------- Middleware ---------//
// ------------------------------//
app.use(morgan("dev")) // logging
app.use(express.urlencoded({extended:true})) // parse req.body


// ------------------------------//
// ----------- Routes -----------//
// ------------------------------//

// Index
app.get('/', (req, res) => {
    // redirect root path to index route
    res.redirect('/pokemon')
})

app.get('/pokemon', (req, res) => {
    res.render('pages/index.ejs', {pokemon})
})

// New - renders form for creating new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('pages/new.ejs')
})

// Delete

// Update

// Create - turns form info into created object
app.post('/pokemon', (req, res) => {
    // parse form data into what the other data looks like
    const newPokemon = parseFormObj(req.body)

    // push object into pokemon array
    pokemon.push(newPokemon)
    console.log(newPokemon)

    // redirect user back to index
    res.redirect('/pokemon')
})

// Edit

// Show
app.get('/pokemon/:id', (req, res) => {
    // convert ID to integer
    const idInt = parseInt(req.params.id)
    console.log(idInt)

    // find pokemon in array by it's ID
    const clickedPokemon = pokemon.find((element) => parseInt(element.id) === (idInt))

    console.log(clickedPokemon)

    res.render('pages/show.ejs', 
    {
        pokemon: clickedPokemon,
        types: clickedPokemon.type,
        stats: clickedPokemon.stats
    })
})

// ------------------------------//
// -------- Turn Server On ------//
// ------------------------------//
app.listen(PORT, () => {
    console.log(`Server is tuning in on: ${PORT}`)
})