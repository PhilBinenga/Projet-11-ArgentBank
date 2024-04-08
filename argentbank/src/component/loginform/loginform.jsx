import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions.jsx';
import { useNavigate } from 'react-router-dom';

const loginform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const succeed = await dispatch(loginUser(email, password));
      if (succeed) {
        navigate('/user');
      } else {
        console.error('Échec lors de la connexion');
      }
    } catch (error) {
      console.error('Échec lors de la connexion', error);
    }
  };

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
        <input type='checkbox' id='remember-me' /><label htmlFor='remember-me'>Remember me</label>
      </div>
      <button type='submit' className='sign-in-button'>Sign In</button>
    </form>
  );
};

export default loginform;