const express = require('express')
const routes = express.Router()

//Rotas
routes.get('/', function(req, res) {
    return res.rendirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes