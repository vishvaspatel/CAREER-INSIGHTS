const mongoose = require('mongoose');

const skill_schema = new mongoose.Schema(
    {
        Program:{
            type : String,
            required : true
        },
        Branch:{
            type : String,
            required : true
        },
        Job :{
            type : String,
            required : true
        },
        Year: {
            type : Number,
            required : true
        },
        Skill :{
            type : String,
            required : true
        },
        Rank :{
            type : Number,
            required : true
        },
        Change : {
             type : Number,
            required : true
        }
    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const skill_data = mongoose.model('skill_data',skill_schema);


module.exports = skill_data;
