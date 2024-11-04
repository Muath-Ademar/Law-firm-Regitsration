from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable= False)
    location = db.Column(db.String(50), nullable= False)
    email = db.Column(db.String(50), nullable = False, unique = True)
    phone = db.Column(db.String(50), nullable = True)
    description = db.Column(db.String(250))
    rating = db.Column(db.Float, nullable = False)
    def __repr__ (self):
        return f'<User {self.name}>'