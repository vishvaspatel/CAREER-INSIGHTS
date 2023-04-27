const mongoose = require('mongoose');

const india_schema = new mongoose.Schema(
    {
        Year :{
            type : Number,
            required : true
        },
        Program :{
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
        Total_institutions:{
            type : Number,
            required : true            
        },
        New_institutions:{
             type : Number,
            required : true
        },
        Closed_institutions:
        {
             type : Number,
            required : true
        },
        Intake : {
             type : Number,
            required : true
        },
        Girls_enrollment : {
             type : Number,
            required : true
        },
        Boys_enrollment : {
             type : Number,
            required : true
        },
        Faculties : {
             type : Number,
            required : true
        },
        Passed : {
             type : Number,
            required : true
        },
        Placement : {
             type : Number,
            required : true
        },
        Enrollment:{
            type : Number,
            required : true
        }

    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const india_data = mongoose.model('india_data',india_schema);


module.exports = india_data;
