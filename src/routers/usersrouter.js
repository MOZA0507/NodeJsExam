const Router = require('express');
const userinfo = require('../controllers/usercontroller');
const cors = require('cors');

const corsOptions={
    origin:"*",
    credentials:true,
    methods:'GET,PUT,POST',
    optionSuccessStatus:200,
}

const app = Router();
app.use(cors(corsOptions));
app.get('/users',userinfo.getUsers);
app.get('/users/:token',userinfo.getUser);

module.exports = app;