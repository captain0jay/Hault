const express = require('express');
const app = express();
//routes import
const twilioRouter = require('./routes/twilioapp');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth')
const contextRouter = require('./routes/context');

//config
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//routes
app.use('/', indexRouter);
app.use('/api/v1/twilio', twilioRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/context', contextRouter);

//server initialiser
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});