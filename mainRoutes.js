'use strict'

const path = require('path')
let express = require('express')
let mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
  res.send('Hello World')
})
mainRouter.get('/main', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'main.html'))
})
module.exports = mainRouter
