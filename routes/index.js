const express = require('express');
const router = express.Router();

const { login } = require('../services/login');
const { appendFile } = require('fs');
const app = express();

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    const result = login(email, password);

    console.log(email,password);
    res.send(req.body)
    res.json(result);
})

module.exports = router;
