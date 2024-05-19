import React, { useState } from 'react';
import '../Pages/Register/Register.css';

const MessagesForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      message,
      phone,
      name,
      subject
    };

    const url = 'http://127.0.0.1:9090/create_message';
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(url, options);

    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      //successful
      window.location.reload();
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-header">Contact Us</h2>
      <p>If you have any questions please feel free to contact with us.</p>
      <form onSubmit={onSubmit} className="message-form">
        <div className="form-group">
          <label htmlFor='email' className="form-label">Email:</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor='name' className="form-label">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor='phone' className="form-label">Phone:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor='subject' className="form-label">Subject:</label>
          <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor='message' className="form-label">Message:</label>
          <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn-primary">Contact Us</button>
      </form>
    </div>
  );
};

export default MessagesForm;