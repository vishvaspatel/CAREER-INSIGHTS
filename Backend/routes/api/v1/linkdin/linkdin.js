const express = require('express');
const skill_controller = require("../../../../controllers/api/controller_skill");
const router = express.Router();

router.get('/:Branch/:Job/:Year',skill_controller.skill);


module.exports = router;