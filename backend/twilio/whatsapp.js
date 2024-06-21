const client = require('../config/twilioConfig');
require('dotenv').config();
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

async function sendMessage(to, body) {
    const twiml = new MessagingResponse();
    twiml.message(body);
    return twiml.toString();
  //   let sendTo = 'whatsapp:'+to;
  //   let sendFrom = 'whatsapp:'+process.env.TWILIO_PHONE_NUMBER;
  // return client.messages.create({
  //   body: body,
  //   from: sendFrom,
  //   to: sendTo,
  // });
}

module.exports = { sendMessage };