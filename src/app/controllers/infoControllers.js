
const User=require('../models/User')
const{mongooseToObject}=require('../../util/mongoose')




class InfoController{
    
    

  
    index(req,res,next){
        {
            if(req.session.nameaccount){

            
            User.findOne({code:req.session.nameaccount})
            .then(data=>{
                
                res.render('info',{data:mongooseToObject(data)})
            })
            }
            else
            {
                res.redirect('login')
            }
            
           
        }



    }
    edit(req,res,next)
    {
        User.updateOne({code:req.session.nameaccount},req.body)
        .then(()=>res.redirect('/info'))
        req.session=null

    }

}
    
   
    

module.exports= new InfoController;