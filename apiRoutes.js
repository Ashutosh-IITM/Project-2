const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { handleQuestion } = require('../controllers/apiController');

router.post('/', upload.single('file'), handleQuestion);

module.exports = router;
