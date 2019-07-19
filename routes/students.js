const express = require('express');
const router = express.Router();

router.get('/martha', (req, res, next) => {
    res.render('martha');
});

router.get('/horacio', (req, res, next) => {
    res.render('horacio');
});

module.exports = router;