const express = require('express');
const twilio = require("twilio");
const { getChat } = require('../llm/getchat');
const { sendSms } = require('../twilio/sms');
const { sendMessage } = require('../twilio/whatsapp');
const { MessagingResponse } = require('twilio').twiml;
const router = express.Router();

require('dotenv').config();
//const authToken = process.env.TWILIO_AUTH_TOKEN;

router.post('/sms', async (req, res) => {
    const userMessage = req.body.Body.trim().toLowerCase();
    //const userPhoneNumber = req.body.From;

    const twiml = new MessagingResponse();

    let response = await getChat(userMessage);

    twiml.message(response);
    res.type('text/xml').send(twiml.toString());
});

router.post('/message', async (req, res) => {
    //console.log(req.body);
    const userMessage = req.body.Body || "hi";
    //const userPhoneNumber = req.body.From;
    const twiml = new MessagingResponse();

    let response = await getChat(userMessage);

    //let getmessage = await sendMessage(response);

    twiml.message(response);
    res.type('text/xml').send(twiml.toString());
});

router.post('/status', async (req, res) => {
    //console.log(req.body);
    const userMessage = req.body.Body || "undefined";
    //const userPhoneNumber = req.body.From;

    // let response = await getChat(userMessage);

    // let getmessage = await sendMessage(response);
    // res.writeHead(200, { "Content-Type": "text/xml" });
    // res.end(getmessage);

    console.log(userMessage);
    //await sendMessage(userPhoneNumber, response)
    //res.send('Home Page');
});

module.exports = router;
