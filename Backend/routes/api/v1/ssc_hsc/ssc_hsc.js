const express = require('express');
const ssc_hsc_controller = require("../../../../controllers/api/controller_ssc_hsc");
const router = express.Router();

router.get('/:Program/:Branch/:Gender',ssc_hsc_controller.ssc_hsc);


module.exports = router;