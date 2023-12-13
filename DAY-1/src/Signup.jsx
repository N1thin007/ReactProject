import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <body>
      <div>
        <form>
          <h2>SIGN UP</h2>
          <label htmlFor='fullname'>Full Name:</label>
          <input type="text" id='fullname' required/>

          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' required/>

          <label htmlFor='newPassword'>New Password:</label>
          <input type="password" id='newPassword' required/>

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type="password" id='confirmPassword' required/>
        <div class="btn">  
          <input type="submit" value="Sign Up"/>
          <button type="button">Login</button>
        </div>  
        </form>
      </div>
    </body>
  );
}

export default Signup;
