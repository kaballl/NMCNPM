
const homeRouter=require('./home')
const loginRouter=require('./login')

const submitRouter=require('./submit') 

function route(app){
   
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)

    app.use('/submit',submitRouter)    
      
}

module.exports=route