import React, { useState } from "react";

export const Login = ({ onLogin, togglePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        onLogin(data);
      } else {
        const error = await response.json();
        console.log(error);
        setResponseMessage(error.message); // Update the error message
      }
    } catch (error) {
      console.log(error);
      setResponseMessage(error.message);
    }
  };

  return (
      <div className="form-container">
        {responseMessage && (
          <p>{responseMessage}</p>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <br />
          <h2>ELY</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required={true}
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
            required={true}
          />
          <button className="login" type="submit">
            Login
          </button>
        </form>
    
        <button className="tog" onClick={togglePage}>Switch to Sign Up</button>
      </div>
    );
    
};
