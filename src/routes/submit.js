const express =require('express')
const router=express.Router()
const submitController=require('../app/controllers/submitControllers')



router.get('/',submitController.index)




module.exports=router;