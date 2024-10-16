//const router = require('express').Router;
const { Router } = require('express');
const router = Router();

router.get('/post', (req, res)=>{
    res.send("chegou aqui -- get");
});

router.post('/post', (req, res)=>{
    res.send("chegou aqui -- post");
});

module.exports = router;