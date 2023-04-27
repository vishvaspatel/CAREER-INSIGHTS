const express = require('express');

const router = express.Router();

// router.use('/Gujarat',require('./Gujarat_year_wise/index_Gujarat_year_wise'));

// router.use('/Static',require('./college_static/index_static'));

router.use('/india',require("./india/india"));
router.use('/form',require("./form/form"));
router.use('/ssc_hsc',require('./ssc_hsc/ssc_hsc'));
router.use('/trend',require('./trend/trend'));
router.use('/linkdin',require('./linkdin/linkdin'));
router.use('/MCA',require("./MCA/MCA"));
router.use('/job',require("./Job/Job"));
router.use('/require',require("./require/require"));
router.get('/',function(req,res){
    return res.end("v1 is  Connected succesfully");
})
module.exports = router;