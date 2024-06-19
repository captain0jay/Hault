const client = require('../config/twilioConfig');
require('dotenv').config();

async function sendMessage(to, body) {
    let sendTo = 'whatsapp:'+to;
    let sendFrom = 'whatsapp:'+process.env.TWILIO_PHONE_NUMBER;
  return client.messages.create({
    body: body,
    from: sendFrom,
    to: sendTo,
  });
}

module.exports = { sendMessage };