const express = require('express');
const form_controller = require("../../../../controllers/api/controller_form");
const router = express.Router();

router.post('/enrollment',form_controller.enrollment);
router.post('/placement',form_controller.placement);
module.exports = router;