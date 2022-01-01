
//const Info=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class UploadController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('upload')
        }



    }

}
    
   
    

module.exports= new UploadController;