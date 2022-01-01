
const homeRouter=require('./home')
const loginRouter=require('./login')
const infoRouter=require('./info.js')

function route(app){
   
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)

    app.use('/info',infoRouter)
      
}

module.exports=route