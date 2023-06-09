const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const user = require('./src/routers/usersrouter');
const usercreate = require('./src/routers/createuser');
const moneyoperation = require('./src/routers/moneyrouter');
const loginoperation = require('./src/routers/loginrouter')
const User = require('./src/models/userModel');
const cors = require('cors');

const corsOptions={
    origin:"*",
    credentials:true,
    methods:'GET,PUT,POST',
    optionSuccessStatus:200,
}



app.use(express.json());
app.use(cors(corsOptions));
app.use(user);
app.use(usercreate);
app.use(moneyoperation);
app.use(loginoperation);


mongoose.set("strictQuery",false);
mongoose.
connect(process.env.DB_STRING)
.then(()=>{
    console.log('connected to mongo');
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch((error)=>{
    console.log(error);
});