
//const Info=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class InfoController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('info')
        }



    }

}
    
   
    

module.exports= new InfoController;