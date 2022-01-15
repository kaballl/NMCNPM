const express =require('express')
const router=express.Router()
const courseController=require('../app/controllers/courseControllers')



router.get('/',courseController.index)




module.exports=router;