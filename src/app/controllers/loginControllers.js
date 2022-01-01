
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')
var log=1



class LoginController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('login',{log})
        }



    }

}
    
   
    

module.exports= new LoginController;