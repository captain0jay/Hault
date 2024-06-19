import GeminiChat from "./geminiai/chat";
import WorkerChat from "./workerai/chat";
require('dotenv').config();

export default async function getChat(prompt){
    let response = '';
    if(process.env.LLM === 'WORKERAI'){
        response = await WorkerChat(prompt);
    }else{
        response = await GeminiChat(prompt);
    }
    return response;
}