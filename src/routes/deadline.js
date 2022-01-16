const express =require('express')
const router=express.Router()
const deadlineController=require('../app/controllers/deadlineControllers')



router.get('/',deadlineController.index)




module.exports=router;