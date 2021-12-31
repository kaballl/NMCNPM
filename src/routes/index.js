
const homeRouter=require('./home')
const loginRouter=require('./login')


function route(app){
   
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)

    
      
}

module.exports=route