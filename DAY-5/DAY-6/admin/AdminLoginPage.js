import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';
import Navbar from '../Navbar';
import WithPasswordHider from '../hoc/WithPasswordHider';

const AdminLoginPage = ({ showPassword }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('AdminLoginPage');

    return () => {
      document.body.classList.remove('AdminLoginPage');
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredAdminUsername = event.target.adminUsername.value;
    const enteredAdminPassword = event.target.adminPassword.value;

    const storedAdminUsername = localStorage.getItem('adminUsername');
    const storedAdminPassword = localStorage.getItem('adminPassword');
    localStorage.setItem('adminUsername', 'Nithin');
    localStorage.setItem('adminPassword', 'Nithin@2004');
    if (
      storedAdminUsername &&
      storedAdminPassword &&
      enteredAdminUsername === storedAdminUsername &&
      enteredAdminPassword === storedAdminPassword
    ) {
      navigate('/dashboard'); 
    } else {
      alert('Invalid admin username or password. Please try again.');
    }
  };

  return (
    <body>
      <Navbar />
      <div className="admin-login-container">
        <div className='new'>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <h2>Admin Login Page</h2>
            <label htmlFor="adminUsername">Admin Username:</label>
            <input type="text" id="adminUsername" name="adminUsername" required/>

            <label htmlFor="adminPassword">Admin Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="adminPassword"
              name="adminPassword"
              required
            />

            <button type="submit">Login as Admin</button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default WithPasswordHider(AdminLoginPage, 4000);
