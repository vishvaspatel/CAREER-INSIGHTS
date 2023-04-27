const express = require('express');
const india_controller = require("../../../../controllers/api/controller_india");
const router = express.Router();

router.get('/:State/:Program/:Type/:Year/:District/:Branch',india_controller.india);
module.exports = router;