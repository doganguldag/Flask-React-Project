import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const UserUpdateForm = ({ user, onClose }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password_hash, setPasswordHash] = useState("");

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            setUsername(user.username);
            setPasswordHash(user.password_hash);
        }
    }, [user]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            username,
            password_hash
        }
        const url = `http://127.0.0.1:9090/update_user/${user.id}`;
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
                <div className='mb-3'>
            <label htmlFor='email' className="form-label">Email:</label>
            <input type = "text" id = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='username' className="form-label">Username:</label>
            <input type = "text" id = "username" value = {username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password_hash' className="form-label">Password:</label>
            <input type = "text" id = "password_hash" value = {password_hash} onChange={(e)=>setPasswordHash(e.target.value)}/>
        </div>
                    <button type="submit">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UserUpdateForm;