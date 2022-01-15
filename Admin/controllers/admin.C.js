const { response } = require('express');

const router = require('express').Router();
const Admin=require('../models/Admin')
const User=require('../models/User')
// GET, POST /signin
router.get('/signin', (req, res) => {

    res.render('signin', {
        title: "Đăng nhập"
    });
})
router.post('/signin', async (req, res) => {
    var sessData = req.session;
    var message;
    Admin.find({email:req.body.username,password:req.body.password})
    .lean()
    .then((admin)=>{
        if(admin.length>=1)
        {
              sessData.admin=admin[0];
              res.redirect('/admin/home');
              return;
        }
        else{
            message="Tên đăng nhập hoặc mật khẩu sai";
            res.render('signin',{admin:req.session.admin,message});
            req.session.destroy();
        }
    })
})

// GET, POST /home
router.get('/home', (req, res) => {
    res.render('home', {
        title: "Trang chủ",
    });
})
router.post('/home', (req, res) => {
    
})

// GET, POST /classList
router.get('/classList', (req, res) => {
    res.render('classList', {
        title: "Danh sách khóa học"
    })
})
router.post('/classList', (req, res) => {
    
})

// GET, POST /profile
router.get('/profile', (req, res) => {
    if(req.session.admin)
    {
    res.render('profile', {
        title: "Thông tin cá nhân",
        admin:req.session.admin,
    })
    }
    else{
        res.redirect("/admin/signin");
    }
})
router.post('/profile', (req, res) => {
    console.log(req.body);
        Admin.updateOne({ _id: req.session.admin._id }, req.body)
    .then(() => res.redirect('/admin/home'))

})
// GET, POST /registerUser
router.get('/registerUser', (req, res) => {
    if(req.session.admin)
    {
    res.render('registerUser', {
        admin:req.session.admin,
        title: "Đăng kí thông tin người dùng"
    })
}
else{
    res.redirect("/admin/signin");
}
})
router.post('/registerTeacher', (req, res) => {
    User.find({code:req.body.code,permission:true})
    .lean()
    .then(user=>{
        if (user.length>=1)
        {
            var message="Mã số đã tồn tại"
            res.render('registerUser',{admin:req.session.admin,message});
        }
        else
        {
            const user = new User(
                req.body
                );
                user.permission=true;
            user
                .save()
                .then(()=>res.redirect('/admin/home'))
        }
    })
})
router.post('/registerStudent', (req, res) => {
    User.find({code:req.body.code,permission:false})
    .lean()
    .then(user=>{
        if (user.length>=1)
        {
            var message1="Mã số đã tồn tại"
            res.render('registerUser',{admin:req.session.admin,message1});
        }
        else
        {
            const user = new User(
                req.body
                );
                user.permission=false;
            user
                .save()
                .then(()=>res.redirect('/admin/home'))
        }
    })
})


module.exports = router;