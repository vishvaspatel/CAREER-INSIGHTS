const express = require('express');
const job_controller = require("../../../../controllers/api/controller_job");
const router = express.Router();

router.get('/:Job_Title',job_controller.job);

module.exports = router;