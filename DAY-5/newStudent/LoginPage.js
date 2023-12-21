import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css';
import Navbar from '../Navbar';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('loginPage');

    return () => {
      document.body.classList.remove('loginPage');
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredUsername = event.target.username.value;
    const enteredPassword = event.target.password.value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    localStorage.setItem('username', 'Nithin');
    localStorage.setItem('password', 'Nithin@2004');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      navigate('/student/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <body className='new'>
      <Navbar/>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}> 
          <h2>Login Page</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required/>

          <button type="submit">Login</button>
        </form>
      </div>
    </body>  
  );
};

export default LoginPage;
