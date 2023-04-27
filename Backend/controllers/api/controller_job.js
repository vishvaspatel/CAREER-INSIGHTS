const model_job_data = require("../../models/model_job");
const mysort = { Year: 1 }

module.exports.job = function (req, res) {

        model_job_data.find({},
        {
        }
    ).exec(function (err, PointSummarys) {
        if (err) { return handleError(res, err); }
        console.log("MCA");
        console.log(req.params);
        return res.status(200).json(PointSummarys);
        //  return res.status(200).json({});
    });
}
