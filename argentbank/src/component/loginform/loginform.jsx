import React, {useState } from 'react';
import {useDispatch} from 'react-redux';
import { loginSuccess } from '../../redux/actions/authAction.jsx';
import { useNavigate } from 'react-router-dom';

const loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('false')
  const [errorMessage, setErrorMessage]= useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if(response.ok) {
        const data = await response.json();
        const token = data.body.token;
        if(rememberMe){
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
        navigate('/user');
        dispatch(loginSuccess({token}));
      } else if (response.status === 400) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setErrorMessage('Mot de passe ou utilisateur invalide')
      }
    } catch (error){
        console.log('erreur', error);
    } 
  }

  return (
    <form onSubmit={handleLogin}>
      <div className='input-wrapper'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='input-remember'>
        <input type='checkbox' id='remember-me' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /><label htmlFor='remember-me'>Remember me</label>
      </div>
      <button type='submit' className='sign-in-button'>Sign In</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  )
};

export default loginform;