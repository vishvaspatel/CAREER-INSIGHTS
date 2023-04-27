const express = require('express');
const controller_trend = require("../../../../controllers/api/controller_trend");
const router = express.Router();

router.get('/:Program/:Branch/:Gender/:Exam',controller_trend.trend);
module.exports = router;