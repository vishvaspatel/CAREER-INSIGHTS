const model_skill_data = require("../../models/model_skill");
const mysort = { Year: 1 }

module.exports.skill = function (req, res) {

        model_skill_data.find({ Year:req.params.Year, Job : req.params.Job, Branch : req.params.Branch},
        {
        }
    ).exec(function (err, PointSummarys) {
        if (err) { return handleError(res, err); }
        console.log("pure trend");
        console.log(req.params);
        return res.status(200).json(PointSummarys);
        //  return res.status(200).json({});
    });
}
