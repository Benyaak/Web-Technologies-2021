const express = require('express');
const app = express();
const sequelize = require('./sequelize');
require('./models/stundets');


app.listen(3000, async () => {
    console.log('The server is running on port http://localhost:3000');
    try {
        await sequelize.authenticate();
        console.log('The connection to the databaswe was initialised.');
    } catch(error) {
        console.error(error);
    }
})