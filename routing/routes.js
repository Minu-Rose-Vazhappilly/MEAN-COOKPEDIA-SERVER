const express = require('express')
const recipeController = require('../controllers/recipeController')
const routes = express.Router()
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const downloadController =  require('../controllers/downloadController')

routes.get('/recipes/all',recipeController.getAllRecipesController)
routes.post('/register',userController.registerController)
routes.post('/login',userController.loginController)
routes.get('/recipes/:id/view',jwtMiddleware,recipeController.viewRecipesController)
routes.get('/related-recipes',jwtMiddleware,recipeController.getRelatedRecipesController)
routes.put('/recipe/:id/download',jwtMiddleware,downloadController.addToDownloadController)

module.exports = routes