const express = require('express');
const router = express.Router();
const { createUser } = require('../model/userModel');

router.post('/register', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
