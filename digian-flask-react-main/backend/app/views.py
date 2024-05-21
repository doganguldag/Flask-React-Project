
from flask import render_template, redirect, url_for, request, flash, jsonify
from flask_login import current_user
from app import app, db
from app.models import Customer, Newsletter, Service, Messages, Quote, User

# JSONIFY

@app.route('/api/service', methods=['GET'])
def get_service():
    service = Service.query.all()
    json_service = list(map(lambda x: x.to_json(), service))
    return jsonify({"services": json_service})

@app.route('/api/user', methods=['GET'])
def get_user():
    user = User.query.all()
    json_user = list(map(lambda x: x.to_json(), user))
    return jsonify({"users": json_user})

@app.route('/api/quote', methods=['GET'])
def get_quote():
    quote = Quote.query.all()
    json_quote = list(map(lambda x: x.to_json(), quote))
    return jsonify({"quotes": json_quote})

@app.route('/api/newsletter', methods=['GET'])
def get_newsletter():
    newsletter = Newsletter.query.all()
    json_newsletter = list(map(lambda x: x.to_json(), newsletter))
    return jsonify({"newsletter": json_newsletter})

@app.route('/api/message', methods=['GET'])
def get_message():
    message = Messages.query.all()
    json_message = list(map(lambda x: x.to_json(), message))
    return jsonify({"messages": json_message})

@app.route('/api/customer', methods=['GET'])
def get_customer():
    customer = Customer.query.all()
    json_customer = list(map(lambda x: x.to_json(), customer))
    return jsonify({"customers": json_customer})

# POST

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')

    # Kullanıcıyı veritabanında kontrol et
    user = User.query.filter_by(username=username, email=email, password_hash=password).first()

    if user:
        return jsonify({'message': 'Login successful!'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401
    
@app.route("/create_user", methods=["POST"])
def create_user():
    email = request.json.get("email")
    username = request.json.get("username")
    password_hash = request.json.get("password_hash")
    
    if not email or not username or not password_hash:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_user = User(email=email, username=username, password_hash=password_hash)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User created!"}), 201

@app.route("/create_message", methods=["POST"])
def create_message():
    email = request.json.get("email")
    message = request.json.get("message")
    phone = request.json.get("phone")
    name = request.json.get("name")
    subject = request.json.get("subject")
    
    if not email or not message or not name or not subject or not phone:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_message = Messages(email=email, message=message, name=name, subject=subject, phone=phone)
    try:
        db.session.add(new_message)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Message created!"}), 201

@app.route("/create_customer", methods=["POST"])
def create_customer():
    comment = request.json.get("comment")
    name = request.json.get("name")
    
    if not comment or not name:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_customer = Customer(comment=comment, name=name)
    try:
        db.session.add(new_customer)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Customer created!"}), 201

@app.route("/create_service", methods=["POST"])
def create_service():
    title = request.json.get("title")
    pageTitle = request.json.get("pageTitle")
    description = request.json.get("description")
    photo_url = request.json.get("photo_url")
    price = request.json.get("price")
    
    if not title or not pageTitle or not description or not photo_url or not price:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_service = Service(title=title, pageTitle=pageTitle, description=description, photo_url=photo_url, price=price)
    try:
        db.session.add(new_service)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Service created!"}), 201

@app.route("/create_newsletter", methods=["POST"])
def create_newsletter():
    email = request.json.get("email")
    
    if not email:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_email = Newsletter(email=email)
    try:
        db.session.add(new_email)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Newsletter created!"}), 201

# DELETE methods

@app.route('/delete_newsletter/<int:id>', methods=['DELETE'])
def delete_newsletter(id):
    print('Deleting newsletter with ID:', id)
    newsletter = Newsletter.query.get(id)
    if not newsletter:
        return jsonify({"message": "Newsletter not found"}), 404

    try:
        db.session.delete(newsletter)
        db.session.commit()
        return jsonify({"message": "Newsletter deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_user/<int:id>', methods=['DELETE'])
def delete_user(id):
    print('Deleting user with ID:', id)
    user = User.query.get(id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    except Exception as e:
        return jsonify({"message": "Error deleting user", "error": str(e)}), 500
    
@app.route('/delete_message/<int:id>', methods=['DELETE'])
def delete_message(id):
    print('Deleting message with ID:', id)
    message = Messages.query.get(id)
    if not message:
        return jsonify({"message": "Message not found"}), 404

    try:
        db.session.delete(message)
        db.session.commit()
        return jsonify({"message": "Message deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_customer/<int:id>', methods=['DELETE'])
def delete_customer(id):
    print('Deleting customer with ID:', id)
    customer = Customer.query.get(id)
    if not customer:
        return jsonify({"message": "Customer not found"}), 404

    try:
        db.session.delete(customer)
        db.session.commit()
        return jsonify({"message": "Customer deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_service/<int:id>', methods=['DELETE'])
def delete_service(id):
    print('Deleting service with ID:', id)
    service = Service.query.get(id)
    if not service:
        return jsonify({"message": "Service not found"}), 404

    try:
        db.session.delete(service)
        db.session.commit()
        return jsonify({"message": "Service deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
# PATCH methods

@app.route("/update_newsletter/<int:id>", methods=["PATCH"])
def update_newsletter(id):
    newsletter = Newsletter.query.get(id)

    if not newsletter:
        return jsonify({"message": "Newsletter not found"}), 404

    data = request.json
    newsletter.email = data.get("email", newsletter.email)

    db.session.commit()

    return jsonify({"message": "Newsletter updated."}), 200

@app.route("/update_customer/<int:id>", methods=["PATCH"])
def update_customer(id):
    customer = Customer.query.get(id)

    if not customer:
        return jsonify({"message": "Customer not found"}), 404

    data = request.json
    customer.name = data.get("name", customer.name)
    customer.comment = data.get("comment", customer.comment)

    db.session.commit()

    return jsonify({"message": "Customer updated."}), 200

@app.route("/update_service/<int:id>", methods=["PATCH"])
def update_service(id):
    service = Service.query.get(id)

    if not service:
        return jsonify({"message": "Service not found"}), 404

    data = request.json
    service.description = data.get("description", service.description)
    service.pageTitle = data.get("pageTitle", service.pageTitle)
    service.photo_url = data.get("photo_url", service.photo_url)
    service.price = data.get("price", service.price)
    service.title = data.get("title", service.title)

    db.session.commit()

    return jsonify({"message": "Service updated."}), 200

@app.route("/update_user/<int:id>", methods=["PATCH"])
def update_user(id):
    user = User.query.get(id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    data = request.json
    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)
    user.password_hash = data.get("password_hash", user.password_hash)

    db.session.commit()

    return jsonify({"message": "User updated."}), 200

@app.route("/update_message/<int:id>", methods=["PATCH"])
def update_message(id):
    message = Messages.query.get(id)

    if not message:
        return jsonify({"message": "Message not found"}), 404

    data = request.json
    message.name = data.get("name", message.name)
    message.message = data.get("message", message.message)
    message.phone = data.get("phone", message.phone)
    message.subject = data.get("subject", message.subject)

    db.session.commit()

    return jsonify({"message": "Message updated."}), 200