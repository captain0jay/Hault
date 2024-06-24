const express = require('express');
const twilio = require("twilio");
const { getChat } = require('../llm/getchat');
const { sendSms } = require('../twilio/sms');
const { sendMessage } = require('../twilio/whatsapp');
const { MessagingResponse } = require('twilio').twiml;
const router = express.Router();

require('dotenv').config();
//const authToken = process.env.TWILIO_AUTH_TOKEN;

router.post('/message', async (req, res) => {
    //console.log(req.body);
    const userMessage = req.body.Body || "hi";
 
    let response = await getChat(userMessage);

    res.send(response);
});

module.exports = router;
