import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const NewsletterUpdateForm = ({ newsletter, onClose }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (newsletter) {
            setEmail(newsletter.email);
        }
    }, [newsletter]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email
        }
        const url = `http://127.0.0.1:9090/update_newsletter/${newsletter.id}`;
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
                        <label htmlFor='email' className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br></br>
                    <button type="submit">Update Newsletter</button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterUpdateForm;