
const User=require('../models/User')
const{mongooseToObject}=require('../../util/mongoose')




class LoginController{
    
    

  //[GET] /login
    index(req,res,next){
        {
            req.session.destroy()
            res.render('login')
        }



    }
    go(req,res,next)
    {
        
        req.session.pass=req.body.password
        req.session.nameaccount=req.body.accountname
        User.findOne({code:req.session.nameaccount,password:req.session.pass})
        .then(data=>{
            
            if(data!=null)
            {
                res.redirect('/info')
            }
            else
            {
                var message="Sai tên đăng nhập hoặc mật khẩu"
                res.render('login',{message})
            }
        })

       
    }

}
    
   
    

module.exports= new LoginController;