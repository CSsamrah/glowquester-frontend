import React, { useState } from 'react';
import './SignInPage.css';
import { useNavigate, Link } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('https://glowquester-backend.vercel.app/skincare/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        const data = await response.json();

        if (response.status === 200) {
            setSuccess(data.message);
            setError('');

            // Check if the data object has the email property
            const userEmail = data.email || ''; // Default to an empty string if email is not present

            // Set admin status based on response email
            if (userEmail === 'samra.fatima.790@gmail.com') { // Replace with the actual admin email
                localStorage.setItem('isAdmin', 'true');
            } else {
                localStorage.setItem('isAdmin', 'false');
            }

            navigate('/admin'); // Navigate to admin page
        } else {
            setError(data.message || 'An error occurred');
            setSuccess('');
        }
    } catch (error) {
        setError(error.message);
        setSuccess('');
    }
};

  return (
    <div className="loginpage">
      <form id="loginForm" onSubmit={handleSubmit}>
        <h4>Sign In</h4>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div>
          Email:
          <input
            type="email"
            id="emailImp"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          Password:
          <input
            type="password"
            id="passwordImp"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Sign in</button>
        <br />
        <Link className="signup" to="/sign-up" style={{ fontSize: '1rem' }}>New around here? Sign up</Link>
      </form>
    </div>
  );
};

export default SignInPage;
