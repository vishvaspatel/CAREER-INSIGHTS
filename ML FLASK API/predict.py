
import pickle
import numpy as np
import pandas as pd
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


pipe=pickle.load(open('ALL_india_pred.pkl','rb'))
data = pd.read_excel('All india data.xlsx')
pipe_gj=pickle.load(open('Gujarat_Pred.pkl','rb'))
data1 = pd.read_excel('District wise gujarat.xlsx')

def predict_res(inp):
    prog=inp.get("prog") 
    type=inp.get("type")
    state=inp.get("state")
    year = inp.get("year", 2022)
    filt=(data['State']==state) &(data['Program']==prog)&(data['Year']==2021)&(data['Type']==type)
    facult=data.loc[filt,'Faculties']
    inst=data.loc[filt,'Total_institutions']
    seats=data.loc[filt,'Intake']
    paa=data.loc[filt,'Passed']


    #input_df = pd.DataFrame(
      #      {'Year': year, 'Program': [prog], 'Type': [type],'State': [state],
     #        'Total_institutions':inst,'New_institutions':new,'Closed_institutions':closed,'Intake':seats,'Faculties':facult})
    input_df = pd.DataFrame(
        {'Year': year, 'Program': [prog], 'Type': [type], 'State': [state],
         'Total_institutions': inst,'Intake': seats,
         'Faculties': facult, 'Passed': paa})
    result = pipe.predict(input_df) 
    temp=result[0]
    
    temp=np.append(temp,[seats])
    

    return temp
  




def Gujarat_pred(inp):
    prog_dt=inp.get("prog") 
    type_dt=inp.get("type")
    state_dt=inp.get("state")
    year_dt = inp.get("year", 2022)
    dis_dt=inp.get("District")
    branc_dt=inp.get("branch")
    #filt=(data['State']==state) &(data['Program']==prog)&(data['Year']==2021)&(data['Type']==type)
    filt1=(data1['Year']==2021)&(data1['District']==dis_dt)&(data1['Type']==type_dt)&(data1['Program']==prog_dt)&(data1['Branch']==branc_dt)
    
    seats_dt=data1.loc[filt1,'Intake']
   


    #input_df = pd.DataFrame(
      #      {'Year': year, 'Program': [prog], 'Type': [type],'State': [state],
     #        'Total_institutions':inst,'New_institutions':new,'Closed_institutions':closed,'Intake':seats,'Faculties':facult})
    '''input_df = pd.DataFrame(
        {'Year': year, 'Program': [prog], 'Type': [type], 'State': [state],
         'Total_institutions': inst, 'New_institutions': new, 'Closed_institutions': closed, 'Intake': seats,
         'Faculties': facult, 'Passed': paa})
    result = pipe1.predict(input_df) 
    temp=result[0]
    
    temp=np.append(temp,[seats])'''
    input_df = pd.DataFrame(
            {'Year': year_dt, 'District':dis_dt,'Type':type_dt,'State':state_dt,'Program':prog_dt,'Branch':branc_dt,
             'Intake':seats_dt})
    result1=pipe_gj.predict(input_df)
    temp1=result1[0]
    
    temp1=np.append(temp1,[seats_dt])
    

    return temp1
