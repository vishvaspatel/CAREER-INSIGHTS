const enrollment_form_data = require("../../models/model_enrollment_form");
const placement_form_data = require("../../models/model_placement_form");

module.exports.enrollment = function (req, res) {
    // enrollment_form_data.create(req.body, function (err, created_user) {
        // console.log(req.body);
        // if (err) {
        //     console.log("Error in Adding Enrollment data");
        //     console.log(err);
        //     return res.send("Error");
        // }
        console.log(req.body);
        var data = new enrollment_form_data(req.body);
        data.save().then(()=>{
            res.status(201).send(data);
        }).catch((err)=>{
            res.status(400).send(err);
        });
    };


    module.exports.placement = function (req, res) {
        // enrollment_form_data.create(req.body, function (err, created_user) {
            // console.log(req.body);
            // if (err) {
            //     console.log("Error in Adding Enrollment data");
            //     console.log(err);
            //     return res.send("Error");
            // }
            console.log(req.body);
            var data = new placement_form_data(req.body);
            data.save().then(()=>{
                res.status(201).send(data);
            }).catch((err)=>{
                res.status(400).send(err);
            });
        };
    // }
    // );
    // console.log(req.body);

    // enrollment_form_data.insertMany(req.body,function(err,added_data)
    // {
    //     if (err) {
    //         console.log("Error in Adding Enrollment data");
    //         console.log(err);
    //         return res.send("Error");
    //     }
    //     return res.send("ok");
    // });
    
    // return;