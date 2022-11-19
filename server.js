// ------------------------------//
// ----- Import Dependencies ----//
// ------------------------------//
require("dotenv").config() // load variables from .env
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override") // import method-override
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

// Seed

// Index

// New

// Delete

// Update

// Create

// Edit

// Show


// ------------------------------//
// -------- Turn Server On ------//
// ------------------------------//
app.listen(PORT, () => {
    console.log(`Server is tuning in on: ${PORT}`)
})