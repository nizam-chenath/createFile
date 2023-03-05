import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
 
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        id: "",
        password: "",
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // You can use Axios or Fetch to send the data to your server-side code for processing
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
  return (
   
    <div className='registerPage'>

        <form onSubmit={handleSubmit}>
          <div>
            
            <input
              type="text"
              id="id"
              name="id"
              placeholder='ID'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
         
          <div>
            
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
     
          <button onClick={() => navigate("/login")} className='button' type="submit">Sign Up</button>
        </form>
      
    </div>
    
   
  )}

export default Register