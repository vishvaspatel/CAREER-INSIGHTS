const express = require('express');
const router = express.Router();

// const home_controller = require('../controllers/home_controller');

router.use('/api',require('./api/index_api'));

router.get('/',function(req,res){
    return res.render('form');
});
module.exports = router;