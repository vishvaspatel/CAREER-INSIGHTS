const express = require('express');
const MCA_controller = require("../../../../controllers/api/controller_MCA");
const router = express.Router();

router.get('/:State/:Description',MCA_controller.MCA);


module.exports = router;