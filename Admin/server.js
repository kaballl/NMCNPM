const   express = require('express'), 
        app = express(),
        port = 3000;
        var session = require('express-session');
        const db = require('./database/Index.js');
require('./middlewares/handlebars')(app);
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));
app.use(express.urlencoded({
    extended: true,
}));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
db.connect();
app.use('/admin', require('./controllers/admin.C'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))