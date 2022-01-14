
const WebAnnouncement=require('../models/WebAnnouncement')
const{mongooseToObject}=require('../../util/mongoose')





class HomeController{
    
    

  //[GET]/singleproduct/:slug
    index(req,res,next){
        {
            WebAnnouncement.find({})
            .skip()
            .limit()
            .lean()
            .then(datas=>{
              res.render('home',{datas})
            })
            .catch(next)
        }



    }

 }
    
   
    

module.exports= new HomeController;