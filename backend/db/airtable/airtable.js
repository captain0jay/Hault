const axios = require('axios');
//const path = require('path');
require('dotenv').config();
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// Define the asynchronous function
const fetchDataFromAirtable = async () => {
  try {
    // Ensure the required environment variables are set
    if (!process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_ID || !process.env.AIRTABLE_API_KEY) {
      throw new Error("Missing required environment variables for Airtable API");
    }

    // Set the Airtable API endpoint URL
    const apiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;

    // Set the headers with the Authorization Bearer token
    const headers = {
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
    };
    // Make the GET request using axios
    const response = await axios.get(apiUrl, { headers });
    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and log them
    console.error("Error fetching data from Airtable:", error.message);
    throw error;
  }
};

const getRecordFromAirtable = async (recordId) => {
    try {
      // Ensure the required environment variables are set
      if (!process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_ID || !process.env.AIRTABLE_API_KEY) {
        throw new Error("Missing required environment variables for Airtable API");
      }
  
      // Set the Airtable API endpoint URL for the specific record
      const apiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}/${recordId}`;
  
      // Set the headers with the Authorization Bearer token
      const headers = {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
      };
  
      // Make the GET request using axios
      const response = await axios.get(apiUrl, { headers });
  
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle errors and log them
      console.error("Error fetching record from Airtable:", error.message);
      throw error;
    }
};

async function updateDescription(recordId,description){
  base(process.env.AIRTABLE_TABLE_ID).update([
    {
      "id": recordId,
      "fields": {
        "Description": description
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('Description'));
    });
  });
  return 0;
}

async function createRecord(params){
  base(process.env.AIRTABLE_TABLE_ID).create([
    {
      "fields": {
        "Name": params.Name,
        "Description": params.Description,
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}


async function DeleteRecord(recordIdArray){
  base(process.env.AIRTABLE_TABLE_ID).destroy(recordIdArray, function(err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Deleted', deletedRecords.length, 'records');
  });
}

module.exports = { fetchDataFromAirtable , getRecordFromAirtable, updateDescription, createRecord, DeleteRecord };