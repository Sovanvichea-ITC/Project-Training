const express = require('express');
const router = express.Router();

const { login } = require('../services/login');
const { register } = require('../services/register');

const app = express();

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    const result = await login(email, password);

    //console.log(email, password);
    //res.send(req.body)
    res.json(result);
});


router.post('/register', async (req, res) => {
    
    const result = await register(req.body);

    res.json(result);
})



module.exports = router;
