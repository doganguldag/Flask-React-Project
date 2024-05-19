import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const CustomerUpdateForm = ({ customer, onClose }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (customer) {
            setName(customer.name);
            setComment(customer.comment);
        }
    }, [customer]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            comment
        }
        const url = `http://127.0.0.1:9090/update_customer/${customer.id}`;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if (response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            onClose(); // Formu kapat
            window.location.reload(); // Sayfayı yenile
        }
    }

    const closeModal = () => {
        onClose(); // Modalı kapat
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='name' className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='comment' className="form-label">Comment:</label>
                        <input type="text" className="form-control" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>
                    <br></br>
                    <button type="submit">Update Customer</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerUpdateForm;