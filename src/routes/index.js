
const homeRouter=require('./home')
const loginRouter=require('./login')

const submitRouter=require('./submit') 
const courseRouter=require('./course')
const mycoursesRouter=require('./mycourses')

function route(app){
   
    app.use('/my-courses',mycoursesRouter)
    app.use('/home',homeRouter)
    app.use('/login',loginRouter)

    app.use('/submit',submitRouter) 
    app.use('/course', courseRouter)   
      
}

module.exports=route