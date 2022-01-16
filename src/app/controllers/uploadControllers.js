const User=require('../models/User')
const{mongooseToObject}=require('../../util/mongoose')




class UploadController{
    
    index(req,res,next){
        if(req.session.nameaccount){

            
            User.findOne({code:req.session.nameaccount})
            .then(data=>{
                res.render('upload',{data:mongooseToObject(data)})
            })
            }
            else
            {
                res.redirect('login')
            }



    }

}
    
   
    

module.exports= new UploadController;