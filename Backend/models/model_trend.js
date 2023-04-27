const mongoose = require('mongoose');

const trend_schema = new mongoose.Schema(
    {
        Program: {
            type: String,
            required: true
        },
        Branch:{
            type: String,
            required: true
        },
        Gender:{
            type: String,
            required: true
        },
        Exam:{
            type: String,
            required: true
        },
        2009 :{
            type: Number,
            required: true
        },
        2010 :{
            type: Number,
            required: true
        },
        2011 :{
            type: Number,
            required: true
        },
        2012 :{
            type: Number,
            required: true
        },
        2013 :{
            type: Number,
            required: true
        },
        2014 :{
            type: Number,
            required: true
        },
        2015 :{
            type: Number,
            required: true
        },
        2016 :{
            type: Number,
            required: true
        },
        2017 :{
            type: Number,
            required: true
        },
        2018 :{
            type: Number,
            required: true
        },
        2019 :{
            type: Number,
            required: true
        }

    },
    {
        timestamps: true//contain the record of updation timinig 
    }
);




const trend_data = mongoose.model('trend_data', trend_schema);


module.exports = trend_data;