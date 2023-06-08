const Router = require('express');
const moneyoperations = require('../controllers/moneyoperationcontroller');

const app = Router();

app.put('/moneydeposit/:id',moneyoperations.addMoney);
app.put('/moneyretire/:token',moneyoperations.takeOffMoney);

module.exports = app;