const express = require('express')
const recipeController = require('../controllers/recipeController')
const routes = express.Router()
const userController = require('../controllers/userController')
routes.get('/recipes/all',recipeController.getAllRecipesController)
routes.post('/register',userController.registerController)

module.exports = routes