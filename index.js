const express = require('express')
const app = express()
const { listOfTeams, getByTeamId } = require('./controllers/teams')

// home route
app.get('/teams', listOfTeams)

// team specific route
app.get('/teams/:id', getByTeamId)

/* eslint-disable no-console */
// setup port
app.listen(3000, () => {
  console.log('Server is up!')
})
