from flask import Flask
from flask_cors import CORS
import changing as chg

app = Flask(__name__)
CORS(app)

@app.route("/")
def Hello():
  return "Minha pagina Flask"

@app.route("/getchange/<change>")
def get_change(change):
  value = int(change)
  return chg.find_min(value)

if __name__ == "__main__":
  app.run(debug=True)