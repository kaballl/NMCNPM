
const Mycourses=require('../models/Class')
const User=require('../models/User')
const Userinclass=require('../models/Userinclass')
const{mongooseToObject, getIdClass, getAClass}=require('../../util/mongoose')
const{mutipleMongooseToObject}=require('../../util/mongoose')

class MyCoursesController{
    
    show(req,res,next){

        User.findOne({code:req.session.nameaccount})
            .then(data=>{
                Mycourses.findOne({_id: req.params.slug})
                    .then(course => 
                        res.render('course/show', {course: mongooseToObject(course), data:mongooseToObject(data)})
                    )
            })
            .catch(next);
    }

    index(req,res,next){

        if(req.session.nameaccount){
            var result = []
            User.findOne({code:req.session.nameaccount})
                .then(doc => {
                    
                    Userinclass.find({id_user:doc._id})
                        .then(data=> {
                            data=mutipleMongooseToObject(data)
                            var idClass = []
                        
                            for(let i=0;i<data.length;i++){
                                idClass.push(data[i].id_class)
                            }

                            var result = []

                            for(let i=0;i<data.length;i++)
                            {
                                Mycourses.findOne({_id:idClass[i]})
                                    .then(x =>{
                                        result.push(x)
                                        
                                        if(i==data.length-1)
                                        {
                                            res.render('mycourses',{result:mutipleMongooseToObject(result), doc:mongooseToObject(doc)})
                                        }
                                    })
                            }
                        })
                })
                .catch(next);
        }
        else{
            res.redirect('login')
        }

        
    }
}
    
module.exports= new MyCoursesController;