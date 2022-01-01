
//const Info=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class NotificationController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('notification')
        }



    }

}
    
   
    

module.exports= new NotificationController;