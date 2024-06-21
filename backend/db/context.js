const { AirtableContextCleaner } = require('../textcleaner/contextCleaner');
const { fetchDataFromAirtable } = require('./airtable/airtable');

require('dotenv').config();

async function getContext(){
    let response = '';
    if(process.env.UI==='AIRTABLE'){
        response = await fetchDataFromAirtable();
    }else{
        response = "Client hasnt configured UI settings please try later!";
    }
    let cleanedtext = await AirtableContextCleaner(response);
    //console.log("response: \n",cleanedtext);
    return cleanedtext;
}

//getContext();
module.exports = { getContext }