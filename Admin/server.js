const   express = require('express'), 
        app = express(),
        port = 3000;
        var session = require('express-session');
        const db = require('./database/Index.js');
        const methodOverride = require('method-override');
require('./middlewares/handlebars')(app);
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));
app.use(express.urlencoded({
    extended: true,
}));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
app.use(methodOverride('_method'));
db.connect();
app.use('/admin', require('./controllers/admin.C'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))