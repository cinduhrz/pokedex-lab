// ------------------------------//
// ----- Import Dependencies ----//
// ------------------------------//
require("dotenv").config() // load variables from .env
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override") // import method-override
const pokemon = require('./models/pokemon') // import DATA
const PORT = process.env.PORT || 3000


// -------------------------------//
// -- Create Express App Object --//
// -------------------------------//
const app = express()


// ------------------------------//
// --------- Middleware ---------//
// ------------------------------//
app.use(morgan("dev")) // logging


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

// New

// Delete

// Update

// Create

// Edit

// Show
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

// ------------------------------//
// -------- Turn Server On ------//
// ------------------------------//
app.listen(PORT, () => {
    console.log(`Server is tuning in on: ${PORT}`)
})