
const model_trend_data = require("../../models/model_trend");
const mysort = { Year: 1 }

module.exports.trend = function (req, res) {

        model_trend_data.find({ Program: req.params.Program , Branch: req.params.Branch, Gender : req.params.Gender, Exam : req.params.Exam},
        {
        }
    ).sort(mysort).exec(function (err, PointSummarys) {
        if (err) { return handleError(res, err); }
        console.log("pure trend");
        console.log(req.params);
        return res.status(200).json(PointSummarys);
        //  return res.status(200).json({});
    });
}


