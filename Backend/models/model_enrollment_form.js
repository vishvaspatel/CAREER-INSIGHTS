const mongoose = require('mongoose');
const validator = require('validator');

const enrollment_form_schema = new mongoose.Schema(
    {
        College :{
            type : String,
            // required : true
        },
        Year :{
            type : Number,
            // required : true
        },
        Counselling :{
            type : String,
            // required : true
        },
        Branch : {
            type : String,
            // required : true
        },
        Intake:{
            type : Number,
            // required : true            
        },
        Total_Enrollment:{
            type : Number,
        //    required : true
       },
        Girls_Enrollment:{
             type : Number,
            // required : true
        },
        Boys_Enrollment:{
            type : Number,
        //    required : true
       },
        Opening_rank_General:
        {
             type : Number,
            // required : true
        },
        Closing_rank_General : {
             type : Number,
            // required : true
        },
        Opening_rank_SC:
        {
             type : Number,
            // required : true
        },
        Closing_rank_SC : {
             type : Number,
            // required : true
        },
        Opening_rank_ST:
        {
             type : Number,
            // required : true
        },
        Closing_rank_ST : {
             type : Number,
            // required : true
        },
        Opening_rank_TFWE:
        {
             type : Number,
            // required : true
        },
        Closing_rank_TFWE : {
             type : Number,
            // required : true
        },
        Opening_rank_SEBC:
        {
             type : Number,
            // required : true
        },
        Closing_rank_SEBC : {
             type : Number,
            // required : true
        },
        Opening_rank_EWS:
        {
             type : Number,
            // required : true
        },
        Closing_rank_EWS : {
             type : Number,
            // required : true
        }
    },
    {
        timestamps : true//contain the record of updation timinig 
    }
);




const enrollment_form_data = mongoose.model('enrollment_form_data',enrollment_form_schema);


module.exports = enrollment_form_data;
