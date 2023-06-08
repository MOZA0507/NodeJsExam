const Router = require('express');
const usercreate = require('../controllers/createusercontroller');

const app = Router();

app.post('/usercreate/:token',usercreate);

module.exports = app;