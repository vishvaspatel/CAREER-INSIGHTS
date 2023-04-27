const mongoose = require('mongoose');

const MCA_schema = new mongoose.Schema(
    {
        Year:{
            type : Number,
            required : true
        },
        State:{
            type : String,
            required : true
        },
        Description:{
            type : String,
            required : true
        },
        Total: {
            type : Number,
            required : true
        }
    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const MCA_data = mongoose.model('MCA_data',MCA_schema);


module.exports = MCA_data;
