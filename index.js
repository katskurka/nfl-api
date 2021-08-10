const express = require('express')
const app = express()
const listOfTeams = require('./controllers/teams')

// require
const teams = require('./teams')

// home
app.get('/teams', listOfTeams)

// setup port
app.listen(3000, () => {
  console.log('Server is up!')
})
