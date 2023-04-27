const india_data = require("../../models/model_india");
const district_data = require("../../models/model_district");
module.exports.india = function (req, res) {
const mysort ={Year : 1}
const programsort = {Branch : 1}
    if (req.params.District == "All") {

        if (req.params.Year == "All") {

            if (req.params.Program == "All") {
                india_data.find({ State: req.params.State, Type: req.params.Type },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                india_data.find({ Program: req.params.Program,State: req.params.State,  Type: req.params.Type },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    // console.log(PointSummarys);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }

        }
        else {
            if (req.params.Program == "All") {
                india_data.find({ State: req.params.State, Type: req.params.Type, Year: req.params.Year },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                india_data.find({Program: req.params.Program, State: req.params.State,  Type: req.params.Type, Year: req.params.Year },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                });
            }


        }
    }

    else if(req.params.Branch == "All") {
        if (req.params.Year == "All") {

            if (req.params.Program == "All") {
                district_data.find({ State: req.params.State, Type: req.params.Type, District: req.params.District },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                district_data.find({ Program: req.params.Program, State: req.params.State,  Type: req.params.Type, District: req.params.District },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }

        }
        else {
            if (req.params.Program == "All") {
                district_data.find({ State: req.params.State, Type: req.params.Type, Year: req.params.Year, District: req.params.District },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                district_data.find({ Program: req.params.Program,State: req.params.State,  Type: req.params.Type, Year: req.params.Year, District: req.params.District },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                });
            }
        }
    }

    else{
        if (req.params.Year == "All") {

            if (req.params.Program == "All") {
                district_data.find({ State: req.params.State, Type: req.params.Type, District: req.params.District , Branch : req.params.Branch},
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                district_data.find({ Program: req.params.Program, State: req.params.State,  Type: req.params.Type, District: req.params.District ,Branch : req.params.Branch},
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }

        }
        else {
            if (req.params.Program == "All") {
                district_data.find({ State: req.params.State, Type: req.params.Type, Year: req.params.Year, District: req.params.District ,Branch : req.params.Branch},
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                    //  return res.status(200).json({});
                });
            }
            else {
                district_data.find({ Program: req.params.Program,State: req.params.State,  Type: req.params.Type, Year: req.params.Year, District: req.params.District,Branch : req.params.Branch },
                    {
                    }
                ).sort(mysort).exec(function (err, PointSummarys) {
                    if (err) { return handleError(res, err); }
                    console.log("state wise data");
                    console.log(req.params);
                    return res.status(200).json(PointSummarys);
                });
            }
        }
    }
}




