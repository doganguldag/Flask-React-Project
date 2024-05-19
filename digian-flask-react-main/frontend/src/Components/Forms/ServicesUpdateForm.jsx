import React, { useState, useEffect } from 'react';
import '../Pages/Login/Login.css'

const ServicesUpdateForm = ({ service, onClose }) => {
  const [description, setDescription] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [photo_url, setPhotoUrl] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");

    useEffect(() => {
        if (service) {
            setDescription(service.description);
            setPageTitle(service.pageTitle);
            setPhotoUrl(service.photo_url);
            setPrice(service.price);
            setTitle(service.title);
        }
    }, [service]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            description,
            pageTitle,
            photo_url,
            price,
            title
        }
        const url = `http://127.0.0.1:9090/update_service/${service.id}`;
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
            <label htmlFor='description' className="form-label">Description:</label>
            <input type = "text" id = "description" value = {description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='pageTitle' className="form-label">Page Title:</label>
            <input type = "text" id = "pageTitle" value = {pageTitle} onChange={(e)=>setPageTitle(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='photo_url' className="form-label">Photo Url:</label>
            <input type = "text" id = "photo_url" value = {photo_url} onChange={(e)=>setPhotoUrl(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='price' className="form-label">Price:</label>
            <input type = "text" id = "price" value = {price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='title' className="form-label">Title:</label>
            <input type = "text" id = "title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
                    <button type="submit">Update Service</button>
                </form>
            </div>
        </div>
    );
};

export default ServicesUpdateForm;