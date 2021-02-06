// create a new Express server
const express = require('express')
const app = express()

// import key for MongoDB Atlas
const db = require('./config/keys').mongoURI

// import Mongoose
const mongoose = require('mongoose')

// connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log("failed", err))

// tells app which port to run on
const port = process.env.PORT || 5000

// tells Express to start a socket and listen for connections
app.listen(port, () => console.log(`Server is running on port ${port}`))

// basic route
app.get('/', (req, res) => res.send('Hello World'))

