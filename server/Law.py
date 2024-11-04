from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, User
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

database_url = os.getenv('DATABASE_URL')
app = Flask(__name__)
app.secret_key = "your_secret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = database_url
CORS(app)
migrate = Migrate(app, db)
db.init_app(app)

@app.route('/register', methods = ['POST'])
def register_user():
    data = request.get_json()
    rating = float(data['rating'])
    email = data['email']
    existing_user = User.query.filter_by(email = email).first()
    if existing_user:
        return jsonify({"error" : "email already exists"}), 409
    new_user = User(   
        name= data['name'],
        location = data['location'],
        phone = data['phone'],
        email = email,
        description= data['description'],
        rating= rating
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"useId": new_user.id}), 201 

@app.route('/user/<int:user_id>')
def getUserById(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({
        "userId" : user.id,
        "name": user.name,
        "location": user.location,
        "phone": user.phone,
        "email": user.email,
        "description": user.description,
        "rating": user.rating,
    })
    
@app.route('/get-email', methods =['POST'])
def getEmail():
    data = request.get_json()
    user = User.query.filter_by(email = data['email']).first()
    if user:
        return jsonify({
        "userId" : user.id,
        "name": user.name,
        "location": user.location,
        "phone": user.phone,
        "email": user.email,
        "description": user.description,
        "rating": user.rating,
        }), 200
    else:
        return jsonify({"error": "User not found"})

if __name__ =='__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
    