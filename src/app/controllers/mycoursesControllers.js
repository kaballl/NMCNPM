

const{mongooseToObject}=require('../../util/mongoose')




class MyCoursesController{
    
    

    //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            res.render('mycourses')
        }



    }

 }
    
   
    

module.exports= new MyCoursesController;