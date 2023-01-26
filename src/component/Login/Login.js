import React, { useState } from "react";
function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
       <div className="App">
         <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("sign up")}>Don't have an account? Sign up.</button>
        </div>
       </div>
    )
}
export default Login;