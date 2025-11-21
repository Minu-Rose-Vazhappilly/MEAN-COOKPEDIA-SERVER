const recipes = require('../models/recipeModel')

//get all recipes
exports.getAllRecipesController = async (req,res)=>{
    console.log("getAllRecipesController");

    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)

    }catch(err){
        res.status(500).json(err)
    }
    

}