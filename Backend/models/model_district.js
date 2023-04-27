const mongoose = require('mongoose');

const district_schema = new mongoose.Schema(
    {
        Year :{
            type : Number,
            required : true
        },
        District :{
            type : String,
            required : true
        },
        Type :{
            type : String,
            required : true
        },
        State : {
            type : String,
            required : true
        },
        Program :{
            type : String,
            required : true
        },
        Branch :{
            type : String,
            required : true
        },
        Intake : {
             type : Number,
            required : true
        },
        Enrollment:{
            type : Number,
            required : true
        },
        Placement : {
             type : Number,
            required : true
        }

    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const district_data = mongoose.model('district_data',district_schema);


module.exports = district_data;
