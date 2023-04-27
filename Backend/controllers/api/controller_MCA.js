const model_MCA_data = require("../../models/model_MCA");
const mysort = { Year: 1 }

module.exports.MCA = function (req, res) {

        model_MCA_data.find({ State : req.params.State, Description: req.params.Description},
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
