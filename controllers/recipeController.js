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

exports.viewRecipesController = async (req,res)=>{
    console.log("viewRecipesController");
    const {id} = req.params

    try{
        const viewDetails = await recipes.findById({_id:id})
        res.status(200).json(viewDetails)

    }catch(err){
        res.status(500).json(err)
    }
    

}

exports.getRelatedRecipesController = async (req,res)=>{
    console.log("getRelatedRecipesController");
    const cuisine = req.query.cuisine

    try{
        const allRecipeDetails = await recipes.find({cuisine})
        res.status(200).json(allRecipeDetails)

    }catch(err){
        res.status(500).json(err)
    }
    

}

