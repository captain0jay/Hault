const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config();

async function GeminiChat(prompt){
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    //console.log(text);
    return text;
}

//GeminiChat("hi");
module.exports = { GeminiChat };