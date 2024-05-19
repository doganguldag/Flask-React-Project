import React, { useState } from 'react'
import '../Pages/Register/Register.css'

const NewsletterForm = ({}) => {
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email
        }
        const url = 'http://127.0.0.1:9090/create_newsletter'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.status!=201 && response.status!=200){
            const data = await response.json()
            alert(data.message)
        }
        else{
            //successful
            window.location.reload();
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='mb-3'>
            <label htmlFor='email' className="form-label">Email:</label>
            <input type = "text" id = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn-primary">Create Newsletter</button>
    </form>
  )
}

export default NewsletterForm