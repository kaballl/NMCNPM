
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class SubmitController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('submit')
        }



    }

}
    
   
    

module.exports= new SubmitController;