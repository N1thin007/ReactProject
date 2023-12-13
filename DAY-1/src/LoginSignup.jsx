import React from 'react';
import './LoginSignup.css';

function LoginSignup() {
    return (
        <body>
        <div>
            <form>
                <h2>LOGIN</h2>
                <label htmlFor='username'>Username:</label>
                <input type="text" id='username' required/>

                <label htmlFor='password'>Password:</label>
                <input type="password" id='password' required/>

                <input type="submit"/>
            </form>
        </div>
        </body>
    );
}

export default LoginSignup;