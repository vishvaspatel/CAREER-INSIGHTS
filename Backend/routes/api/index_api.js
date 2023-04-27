const express = require('express');

const router = express.Router();

router.use('/v1',require('./v1/index_v1'));


router.get('/',function(req,res){
    return res.end("api Connected succesfully");
})
module.exports = router;