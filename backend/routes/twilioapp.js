const express = require('express');
const twilio = require("twilio");
const { default: getChat } = require('../llm/getchat');
const { sendSms } = require('../twilio/sms');
const { sendMessage } = require('../twilio/whatsapp');
const { MessagingResponse } = require('twilio').twiml;
const router = express.Router();

require('dotenv').config();
//const authToken = process.env.TWILIO_AUTH_TOKEN;

router.get('/sms', async (req, res) => {
    const userMessage = req.body.Body.trim().toLowerCase();
    const userPhoneNumber = req.body.From;

    let response = await getChat(userMessage);

    await sendSms(userPhoneNumber, response)
    //res.send('Home Page');
});

router.get('/message', async (req, res) => {
    const userMessage = req.body.Body.trim().toLowerCase();
    const userPhoneNumber = req.body.From;

    let response = await getChat(userMessage);

    await sendMessage(userPhoneNumber, response)
    //res.send('Home Page');
});

module.exports = router;
