const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/token', async (req, res) => {
    const { code } = req.body;
    const tokenUrl = 'https://accounts.google.com/o/oauth2/token';
    const data = {
        code: code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code'
    };

    try {
        const response = await axios.post(tokenUrl, new URLSearchParams(data));
        
        if (response.status !== 200) {
            return res.status(response.status).json({ detail: 'Failed to authenticate' });
        }

        const accessToken = response.data.access_token;
        if (!accessToken) {
            return res.status(400).json({ detail: 'Access token not received' });
        }

        res.json({ accessToken: accessToken });

    } catch (error) {
        console.error(error);
        res.status(500).json({ detail: 'Internal server error' });
    }
});

router.post('/user', async (req, res) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(400).json({ detail: 'Bearer token is required in the Authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (userInfoResponse.status !== 200) {
            return res.status(userInfoResponse.status).json({ detail: 'Failed to fetch user info' });
        }

        const userInfo = userInfoResponse.data;
        console.log(userInfo);

        // Handle user info (e.g., create a user session, return user info)
        let access;
        if (userInfo.email === process.env.OWNER_EMAIL) {
            access = 'passed';
        } else {
            access = 'denied';
        }

        return res.json({ status: access });

    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ detail: 'Internal server error' });
    }
});

module.exports = router;
