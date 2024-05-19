import React, { useState } from 'react'
import '../Pages/Register/Register.css'

const UserForm = ({}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password_hash, setPasswordHash] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            username,
            password_hash
        }
        const url = 'http://127.0.0.1:9090/create_user'
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
        <div className='mb-3'>
            <label htmlFor='username' className="form-label">Username:</label>
            <input type = "text" id = "username" value = {username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password_hash' className="form-label">Password:</label>
            <input type = "text" id = "password_hash" value = {password_hash} onChange={(e)=>setPasswordHash(e.target.value)}/>
        </div>
        <button type="submit" className="btn-primary">Create User</button>
    </form>
  )
}

export default UserForm