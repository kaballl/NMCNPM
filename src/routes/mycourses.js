const express =require('express')
const router=express.Router()
const mycoursesController=require('../app/controllers/mycoursesControllers')


router.get('/:slug',mycoursesController.show)
router.get('/',mycoursesController.index)




module.exports=router;