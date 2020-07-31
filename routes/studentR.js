const express = require('express');
const router = express.Router();
const studentGetC = require('../controllers/studentGetC');

router.get(
    '/get',
    studentGetC.dictionaryDataGet
);


module.exports =router;