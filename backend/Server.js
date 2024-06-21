const express = require('express');
const app = express();
//routes import
const twilioRouter = require('./routes/twilioapp');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth')

//config
require('dotenv').config();
const port = process.env.PORT || 3000;

//routes
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use('/', indexRouter);
app.use('/api/v1/twilio', twilioRouter);
app.use('/api/v1/auth', authRouter);

//server initialiser
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});