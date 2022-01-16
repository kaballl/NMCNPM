const express =require('express')
const router=express.Router()
const notificationController=require('../app/controllers/notificationControllers')



router.get('/',notificationController.index)




module.exports=router;