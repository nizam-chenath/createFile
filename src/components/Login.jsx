import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here
    console.log(`id: ${id}, Password: ${password}`);
  }

  return (
    <div className='login-page'>

    <form onSubmit={handleSubmit}>
     
        <div>

        <input id="id" placeholder='ID' type="number" value={id} onChange={handleIdChange} />
        </div>
        <div>

        <input id="password" placeholder='Password' type="password" value={password} onChange={handlePasswordChange} />
        </div>
      
      <button className='button' type="submit" onClick={() => navigate('/create')}>Login</button>
    </form>
    </div>
  );
}

export default Login;
