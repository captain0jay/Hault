const express = require('express');
const router = express.Router();
require('dotenv').config();

// Import the Airtable functions
const { fetchDataFromAirtable, getRecordFromAirtable, updateDescription, createRecord, DeleteRecord } = require('../db/airtable/airtable');

// Define the routes

// Route to read all records
router.get('/read', async (req, res) => {
    try {
        const data = await fetchDataFromAirtable();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from Airtable');
    }
});

// Route to read a specific record by ID
router.get('/read/:id', async (req, res) => {
    try {
        const recordId = req.params.id;
        const data = await getRecordFromAirtable(recordId);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching record from Airtable');
    }
});

// Route to create a new record
router.post('/create', async (req, res) => {
    try {
        const params = req.body;
        await createRecord(params);
        res.send('Record created successfully');
    } catch (error) {
        res.status(500).send('Error creating record');
    }
});

// Route to update a record's description
router.post('/update', async (req, res) => {
    try {
        const { recordId, description } = req.body;
        console.log(recordId, description);
        await updateDescription(recordId, description);
        res.send('Record updated successfully');
    } catch (error) {
        res.status(500).send('Error updating record');
    }
});

// Route to delete records
router.post('/delete', async (req, res) => {
    try {
        const { recordIdArray } = req.body;
        await DeleteRecord(recordIdArray);
        res.send('Record(s) deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting record(s)');
    }
});

module.exports = router;
