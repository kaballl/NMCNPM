
//const Info=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class DeadlineController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('deadline')
        }



    }

}
    
   
    

module.exports= new DeadlineController;