const Router = require('express');
const login = require('../controllers/logincontroller');
const cors = require('cors');

const corsOptions={
    origin:"*",
    credentials:true,
    methods:'GET,PUT,POST',
    optionSuccessStatus:200,
}
const app = Router();

app.use(cors(corsOptions));
app.post('/login',login);

module.exports = app;