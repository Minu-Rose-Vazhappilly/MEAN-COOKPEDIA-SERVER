const downloads  = require('../models/downloadModel')

exports.addToDownloadController = async(req,res)=>{
    console.log( ' Inside addToDownloadController');

    //recipe id
    const {id} = req.params
    const userMail = req.payload

    const {name,cuisine,image} = req.body

    try{

        const existingRecipe = await downloads.findOne({recipeId:id})

        if(existingRecipe){
            existingRecipe.count+=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)

        }else{
            const newDownload = new downloads({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userMail
            })
            await newDownload.save()
            res.status(200).json(newDownload)
        }

    }catch(err){
        res.status(500).json(err)
    }
    
}

