const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

router.get('/test', function(req, res) {

    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('test!');
});

router.get('/', function(req, res) {
    console.log('hit route')
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('test!');
});

router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

module.exports = router;
