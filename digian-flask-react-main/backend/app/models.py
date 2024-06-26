from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from flask_login import UserMixin

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    pageTitle = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.String(250))  
    price = db.Column(db.Float, nullable=False) 
    quotes = db.relationship('Quote', backref='service', lazy=True)

    def __repr__(self):
        return f'<Service {self.title}>'
    
    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "pageTitle": self.pageTitle,
            "description": self.description,
            "photo_url": self.photo_url,
            "price": self.price
        }

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(256))
    quotes = db.relationship('Quote', backref='user', lazy=True)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password_hash": self.password_hash
        }

class Quote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    request_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    # Add any additional fields related to the quote if needed
    
    def to_json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "service_id": self.service_id,
            "request_date": self.request_date
        }

class Newsletter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "email": self.email
        }

class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True)
    phone = db.Column(db.String(15), index=True)
    subject = db.Column(db.String(64), index=True)
    message = db.Column(db.String(512), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "subject": self.subject,
            "message": self.message
        }

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    comment = db.Column(db.String(512), nullable=False)
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "comment": self.comment
        }