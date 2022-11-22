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
const findPokemonIndexById = require('./public/findPokemonIndexById') // import function to find pokemon index using its id

// -------------------------------//
// -- Create Express App Object --//
// -------------------------------//
const app = express()


// ------------------------------//
// --------- Middleware ---------//
// ------------------------------//
app.use(morgan("dev")) // logging
app.use(express.urlencoded({extended:true})) // parse req.body
app.use(methodOverride("_method")) // swaps the method with specified method in query if url has the query of ?_method=XXXXX :o
app.use("/static", express.static("public")) // serve static files in public folder via static url


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
app.delete('/pokemon/:id', (req, res) => {
    // find pokemon index by id
    const clickedPokemonIndex = findPokemonIndexById(req.params.id, pokemon)

    // splice item out of the array
    // splice (index to start at, # of items to remove)
    pokemon.splice(clickedPokemonIndex, 1)

    // redirect user back to index
    res.redirect('/pokemon')
})

// Update
app.put('/pokemon/:id', (req, res) => {
    // find pokemon index by id
    const clickedPokemonIndex = findPokemonIndexById(req.params.id, pokemon)
    console.log(pokemon[clickedPokemonIndex])

    // parse req.body data
    const updatedPokemon = parseFormObj(req.body)

    // update pokemon in array
    pokemon[clickedPokemonIndex] = updatedPokemon
    console.log(pokemon[clickedPokemonIndex])

    // redirect user back to index
    res.redirect('/pokemon')
})

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
app.get('/pokemon/:id/edit', (req, res) => {
    // find pokemon by id
    const clickedPokemonIndex = findPokemonIndexById(req.params.id, pokemon)
    const clickedPokemon = pokemon[clickedPokemonIndex]

    // manipulate type array so that it'll render as separated by spaces instead of commas
    console.log(clickedPokemon.type)
    const stringifiedTypeArr = clickedPokemon.type.join(" ").toString()

    res.render(
        'pages/edit.ejs',
        {
            pokemon: clickedPokemon,
            type: stringifiedTypeArr
        }
    )
})

// Show
app.get('/pokemon/:id', (req, res) => {
    // find pokemon by id
    const clickedPokemonIndex = findPokemonIndexById(req.params.id, pokemon)
    const clickedPokemon = pokemon[clickedPokemonIndex]

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