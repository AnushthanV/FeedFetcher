from flask import Flask, render_template
from scraper import get_headlines  # Import from scraper.py

app = Flask(__name__)

@app.route('/')
def index():
    headlines = get_headlines()
    return render_template('index.html', headlines=headlines)

if __name__ == '__main__':
    app.run(debug=True)
