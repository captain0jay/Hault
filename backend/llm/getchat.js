const { GeminiChat } = require("./geminiai/chat");
const { openaichat } = require("./openai/chat");
const { selfhostchat } = require("./selfhost/chat");
const { WorkerChat } = require("./workerai/chat");

require('dotenv').config();

async function getChat(prompt){
    let response = '';
    if(process.env.LLM === 'WORKERAI'){
        response = await WorkerChat(prompt);
    }else if(process.env.LLM === 'OPENAI'){
        response = await openaichat(prompt);
    }else if(process.env.LLM === 'SELFHOSTAI'){
        response = await selfhostchat(prompt);
    }else if(process.env.LLM === 'GEMINIAI'){
        response = await GeminiChat(prompt);
    }else{
        console.log("Error: no LLM env variable file found, Please add LLM env variable in root ENV file from any one of these value [WORKERAI, GEMINIAI ,OPENAI , SELFHOSTAI] for more info check SETUP.md file in root project folder");
        response = "Client hasnt configured llm settings please try later!";
    }
    return response;
}

module.exports = { getChat }