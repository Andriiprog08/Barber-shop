from flask import Flask, render_template
from data import priceInfos, aboutusContents

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", priceInfos = priceInfos, aboutusContents = aboutusContents)

if __name__ == "__main__":
    app.run(debug=True)