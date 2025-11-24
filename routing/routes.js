const express = require('express')
const recipeController = require('../controllers/recipeController')
const routes = express.Router()
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

routes.get('/recipes/all',recipeController.getAllRecipesController)
routes.post('/register',userController.registerController)
routes.post('/login',userController.loginController)
routes.get('/recipes/:id/view',jwtMiddleware,recipeController.viewRecipesController)
routes.get('/related-recipes',jwtMiddleware,recipeController.getRelatedRecipesController)

module.exports = routes