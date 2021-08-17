const teams = require('../teams')

const listOfTeams = (req, res) => {
  return res.send(teams)
}

const getByTeamId = (req, res) => {
  const { id } = req.params
  const specificTeam = teams.filter(team => team.id === parseInt(id))

  return res.send(specificTeam)
}

const createNewTeam = (req, res) => {
  const {
    location, mascot, abbreviation, conference, division
  } = req.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return res.status(400).send('Need more info')
  }

  const newId = teams[teams.length - 1].id + 1

  const newTeam = {
    id: newId, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return res.status(201).redirect('/teams')
}

module.exports = { listOfTeams, getByTeamId, createNewTeam }
