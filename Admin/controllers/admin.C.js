const { response } = require('express');

const router = require('express').Router();

// GET, POST /signin
router.get('/signin', (req, res) => {
    res.render('signin', {
        title: "Đăng nhập"
    });
})
router.post('/signin', async (req, res) => {

})

// GET, POST /home
router.get('/home', (req, res) => {
    res.render('home', {
        title: "Trang chủ"
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
    res.render('profile', {
        title: "Thông tin cá nhân"
    })
})
router.post('/profile', (req, res) => {
    
})

// GET, POST /registerUser
router.get('/registerUser', (req, res) => {
    res.render('registerUser', {
        title: "Đăng kí thông tin người dùng"
    })
})
router.post('/registerUser', (req, res) => {
    
})


module.exports = router;