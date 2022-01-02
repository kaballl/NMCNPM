
const homeRouter=require('./home')
const loginRouter=require('./login')
const infoRouter=require('./info.js')
const submitRouter=require('./submit') 
const deadlineRouter=require('./deadline') 
const notificationRouter=require('./notification') 
const uploadRouter=require('./upload') 
const mycoursesRouter=require('./mycourses')
const coursesRouter=require('./courses')

function route(app){
   
    app.use('/courses',coursesRouter)
    app.use('/my-courses',mycoursesRouter)
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)
    app.use('/info',infoRouter)
    app.use('/submit',submitRouter)    
    app.use('/deadline',deadlineRouter) 
    app.use('/notification',notificationRouter) 
    app.use('/upload',uploadRouter) 
}

module.exports=route