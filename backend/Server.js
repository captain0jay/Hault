const express = require('express');
const app = express();
const twilioRouter = require('./routes/twilioapp');
const indexRouter = require('./routes/index');
//config
require('dotenv').config();
const port = process.env.PORT || 3000;

//routes
app.use('/', indexRouter);
app.use('/api/v1/twilio', twilioRouter);

//server initialiser
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});