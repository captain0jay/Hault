const { context } = require('../../textcleaner/contextCleaner');
const axios = require('axios');
require('dotenv').config();

async function WorkerChat(prompt){
    let new_response = '';
    let contextt = await context();
    try {
        const cloudflareAppId = process.env.CLOUDFLARE_APP_ID;

        // Define headers
        const headers = {
            'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json'
        };

        // Define request body
        const requestBody = {
            "messages": [
                {
                    "role": "system",
                    "content": contextt
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        };

        // Make POST request
        const response = await axios.post(`https://api.cloudflare.com/client/v4/accounts/${cloudflareAppId}/ai/run/@cf/meta/llama-2-7b-chat-fp16`, requestBody, { headers });

        // Return response data
        console.log('Response:', response.data.result.response);
        new_response = response.data.result.response;
    } catch (error) {
        // Handle error
        console.error('Error:', error);
        throw error;
    }
    return new_response;
}

module.exports = { WorkerChat };