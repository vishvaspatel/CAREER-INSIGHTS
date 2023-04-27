const ssc_hsc_data = require("../../models/model_ssc_hsc");
const mysort = { Year: 1 }

module.exports.ssc_hsc = function (req, res) {
    if (req.params.Program != "Engineering") {

        if (req.params.Branch == "All") {

            ssc_hsc_data.find({ Program: req.params.Program ,Gender : req.params.Gender},
                {
                }
            ).sort(mysort).exec(function (err, PointSummarys) {
                if (err) { return handleError(res, err); }
                console.log("SSC program wise data");
                console.log(req.params);
                return res.status(200).json(PointSummarys);
                //  return res.status(200).json({});
            });
        }
        else {
            ssc_hsc_data.find({ Program: req.params.Program, Branch: req.params.Branch,Gender : req.params.Gender },
                {
                }
            ).sort(mysort).exec(function (err, PointSummarys) {
                if (err) { return handleError(res, err); }
                console.log("SSC Branch wise data");
                console.log(req.params);
                return res.status(200).json(PointSummarys);
                //  return res.status(200).json({});
            });
        }

    }
    else {
        ssc_hsc_data.find({ Program: req.params.Program, Branch: req.params.Branch,Gender : req.params.Gender },
            {
            }
        ).sort(mysort).exec(function (err, PointSummarys) {
            if (err) { return handleError(res, err); }
            console.log("SSC Branch wise data");
            console.log(req.params);
            return res.status(200).json(PointSummarys);
            //  return res.status(200).json({});
        });
    }
}

