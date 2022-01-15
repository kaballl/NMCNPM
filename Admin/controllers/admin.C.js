const { response } = require('express');

const router = require('express').Router();
const Admin=require('../models/Admin')
const User=require('../models/User')
const Class=require('../models/Class')
const UserInClass=require('../models/UserInClass')
// GET, POST /signin
router.get('/signin', (req, res) => {
    req.session.destroy();
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
    if(req.session.admin)
    {
    res.render('home', {
        admin:req.session.admin,
        title: "Trang chủ",
    });
}
else{
    res.redirect("/admin/signin");
}
})
router.post('/home', (req, res) => {
    
})

// GET, POST /classList
router.get('/classList', (req, res) => {
        if(req.session.admin)
    {
    Class.find()
    .lean()
    .then((classes)=>{
    res.render('classList', {
        title: "Danh sách khóa học",
        classes,
    })
})}
else{
    res.redirect("/admin/signin");
}
})
router.get('/insertClass',(req,res)=>{
    if(req.session.admin)
    {
     res.render('insertClass',{
    title: "Thêm khóa học",admin:req.session.admin,
})}else{
    res.redirect("/admin/signin");
}})
router.post('/classList',(req,res)=>{
    const cla = new Class(
        req.body
        );
    cla
        .save()
        .then(()=>res.redirect('/admin/classList'))
})
router.get('/:id/insertUser', (req, res) => {
    if(req.session.admin)
    {
    req.session.newid=req.params.id
    res.render('insertUser', {admin:req.session.admin,
        title: "Thêm giáo viên, sinh viên vào lớp học"
    })
}else{
    res.redirect("/admin/signin");
}})
router.post('/insertUser', (req, res) => {
    User.find({code:req.body.code})
    .lean()
    .then((user)=>{
        if(user.length==0)
        {
            var message="Mã giáo viên/ sinh viên không tồn tại"
            res.render('insertUser', {
                title: "Thêm giáo viên, sinh viên vào lớp học",
                message,
            })
        }
        else
        {
            const us = new UserInClass();
                us.id_class=req.session.newid;
                us.id_user=user[0]._id;
 
            us
                .save()
                .then(()=>res.redirect('/admin/classList'))
        }
    })
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
router.get('/profile/edit', (req, res) => {
    if(req.session.admin)
    {
    res.render('editProfile', {
        admin:req.session.admin,
        title: "Chỉnh sửa thông tin cá nhân"
    })
}
else{
    res.redirect("/admin/signin");
}
})
router.post('/profile/edit', (req, res) => {
     console.log(req.session.admin)
    req.session.admin.name=req.body.name;
    req.session.admin.gender=req.body.gender;
    req.session.admin.address=req.body.address;
    req.session.admin.email=req.body.email;
    Admin.updateOne({ _id: req.session.admin._id }, req.body)
    .then(() => res.redirect('/admin/profile'))
})


module.exports = router;