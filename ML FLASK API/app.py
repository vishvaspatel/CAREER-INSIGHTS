from distutils.log import debug
import math
from flask import Flask, jsonify, request
from predict import predict_res,Gujarat_pred
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import make_column_transformer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline


app = Flask("__main__")
app.DEBUG = True
CORS(app)


@app.route("/",methods=['GET','POST'])
def temp():
    return "OK"
@app.route("/predict/india/<state>/<prog>/<type>/<year>/<dist>/<brc>", methods=['GET', 'POST'])
def predict(state, prog, type, year, dist,brc):

    #args = request.args
    #args = args.to_dict()

    # year = args.get("year", 2022)
    # prog = args.get("program", 'engineering')
    # type = args.get("type", 'private')
    # state = args.get("state", 'All')
    # total_inst = args.get("total_inst", 2469)
    # new_inst = args.get("new_inst", 5)
    # closed_inst = args.get("closed_inst", 0)

    # if (request.headers["Content-Type"] == 'application/json'):
    #     req = request.get_json()
    #     branch = req['branch']
    #     dist = req['dist']

    # else:
    #     branch = request.form.get('branch')
    #     dist = request.form.get('dist')

    try:
     if ((dist == "All") and (brc=="All")):
         if (prog == "All"):
             result1 = predict_res(
                 {'prog': 'Engineering', 'type': type, 'state': state, 'year': int(year)})
             result2 = predict_res(
                 {'prog': "Management", 'type': type, 'state': state, 'year': int(year)})
             result3 = predict_res(
                 {'prog': "Pharmacy", 'type': type, 'state': state, 'year': int(year)})
             return jsonify([{
                 "Program": "Engineering",
                 "total_enrollment": math.ceil(result1[0]),
                 "Placement": math.ceil(result1[1]),
                 "Intake": math.ceil(result1[2]),
                    # "msg": 200
             }, {
                 "Program": "Management",
                 "total_enrollment": math.ceil(result2[0]),
                 "Placement": math.ceil(result2[1]),
                 "Intake": math.ceil(result2[2]),
                    # "msg": 200
             },
                 {
                 "Program":"Pharmacy",
                 "total_enrollment": math.ceil(result3[0]),
                 "Placement": math.ceil(result3[1]),
                 "Intake": math.ceil(result3[2]),
                 "msg": 200
             }])
         else:
             result = predict_res(
                 {'prog': prog, 'type': type, 'state': state, 'year': int(year)})
             return jsonify([{
                 "total_enrollment": math.ceil(result[0]),
                 "Placement": math.ceil(result[1]),
                 "Intake": math.ceil(result[2]),
                 "msg": 200
             }])

     else:
        result=Gujarat_pred({'prog':prog, 'type':type, 'state':state, 'year': int(year),'District':dist,'branch':brc})
        return jsonify([{
        
        "Intake":math.ceil(result[2]),
        "total_enrollment": math.ceil(result[0]),
        "Placement": math.ceil(result[1]),
        
        "msg": 200
          }])
    except ValueError:
        return jsonify([{
            "msg": "Please enter correct url"
        }])

    


if __name__ == '__main__':
    app.run(debug = True,host="0.0.0.0",port=5000)
