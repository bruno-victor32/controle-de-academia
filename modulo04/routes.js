const express = require('express')
constroutes = express.Router()

//Rotas
routes.get('/', function(req, res) {
    return res.send("ok")
})

module.exports = routes