from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# In app.py
from flask_migrate import Migrate
from models import User

# After initializing SQLAlchemy (db)

app = Flask(__name__)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Example with SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)
# In app.py



# After initializing SQLAlchemy (db)
migrate = Migrate(app, db)

# Simple route to test the setup
@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
