const mongoose = require('mongoose');

const require_schema = new mongoose.Schema(
    {
        Industry:{
            type : Number,
            required : true
        },
        Occupation:{
            type : String,
            required : true
        },
        Percentage:{
            type : String,
            required : true
        }
    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const require_data = mongoose.model('require_data',require_schema);


module.exports = require_data;
