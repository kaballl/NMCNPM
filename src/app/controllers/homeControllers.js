
const WebAnnouncement=require('../models/WebAnnouncement')
const{mongooseToObject}=require('../../util/mongoose')





class HomeController{
    
    index(req,res,next){
        {
            WebAnnouncement.find({})
            .skip()
            .limit()
            .lean()
            .then(datas=>{
              req.session.destroy()
              res.render('home',{datas})
            })
            .catch(next)
        }



    }

 }
    
   
    

module.exports= new HomeController;