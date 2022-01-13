const   express = require('express'), 
        app = express(),
        port = 3000;

require('./middlewares/handlebars')(app);

app.use(express.urlencoded({
    extended: true,
}));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());


app.use('/admin', require('./controllers/admin.C'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))