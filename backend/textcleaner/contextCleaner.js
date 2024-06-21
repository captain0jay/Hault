async function context(){
    let context = 'you are a ai chatbot';
    return context;
}

function AirtableContextCleaner(response) {
    if (!response.records || !Array.isArray(response.records)) {
      throw new Error('Invalid response format');
    }
  
    return response.records.map(record => {
      if (!record.fields || !record.fields.Name || !record.fields.Description) {
        throw new Error('Invalid record format');
      }
      return `Name: ${record.fields.Name}\nDescription: ${record.fields.Description}`;
    }).join('\n\n');
}

module.exports = { context, AirtableContextCleaner };
  