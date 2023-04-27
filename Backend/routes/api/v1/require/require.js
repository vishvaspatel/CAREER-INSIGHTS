const express = require('express');
const require_controller = require("../../../../controllers/api/controller_require");
const router = express.Router();

router.get('/:Industry',require_controller.require);


module.exports = router;