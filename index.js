/* eslint-disable no-console */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { listOfTeams, getByTeamId, createNewTeam } = require('./controllers/teams')
const teams = require('./teams')

// adding top level parsing
app.use(bodyParser.json())

// home route
app.get('/teams', listOfTeams)

// team specific route
app.get('/teams/:id', getByTeamId)

// create post route for creating a new team
app.post('/', createNewTeam)

/* eslint-disable no-console */
// setup port
app.listen(3001, () => {
  console.log('Server is up!')
})

