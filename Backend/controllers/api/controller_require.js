const model_require_data = require("../../models/model_require");
const mysort = { Year: 1 }

module.exports.require = function (req, res) {

        model_require_data.find({},
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
