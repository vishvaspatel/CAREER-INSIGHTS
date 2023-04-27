const mongoose = require('mongoose');

const job_schema = new mongoose.Schema(
    {
        Job_Title:{
            type : String,
            required : true
        },
        Date:{
            type : String ,
            required : true
        },
        Total_job:{
            type : String,
            required : true
        },
    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const job_data = mongoose.model('job_data',job_schema);


module.exports = job_data;
