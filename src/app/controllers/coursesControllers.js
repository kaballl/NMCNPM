
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class CoursesController{
    
    

    //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('courses')
        }



    }

 }
    
   
    

module.exports= new CoursesController;