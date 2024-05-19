import React, { useState } from 'react';
import '../Pages/Register/Register.css';

const CustomerForm = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      comment
    };

    const url = 'http://127.0.0.1:9090/create_customer';
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
      <form onSubmit={onSubmit} className="message-form">
        <div className="form-group">
          <label htmlFor='name' className="form-label">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor='comment' className="form-label">Comment:</label>
          <textarea type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn-primary">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;