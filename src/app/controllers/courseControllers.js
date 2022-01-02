
const Product=require('../models/Product')
const{mongooseToObject}=require('../../util/mongoose')




class CourseController{
    
    

    //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('course')
        }



    }

 }
    
   
    

module.exports= new CourseController;