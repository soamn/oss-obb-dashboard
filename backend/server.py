from flask import Flask , jsonify 
from flask_cors import CORS
from openbb import obb
import pandas 

app=Flask(__name__)
CORS(app)

@app.route('/openbb/<ticker>',methods=['GET'])

def get_data(ticker):
    try:
        equity_data=obb.equity.price.quote(ticker).to_df().reset_index().to_dict(orient='records')
        return jsonify(equity_data)
    except Exception as e:
        return jsonify(str(e),{"error"}),500
    

if __name__ == "__main__":
    app.run(debug=True)




