import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editUser, setProfile } from '../../redux/actions/userActions.jsx';


function user() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const userData = useSelector((state) => state.user.userData);

  const [show, setShow] = useState(true);
  const [userName, setUserName] = useState('');

useEffect(() => {
  if (token){
    const userData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const userData = {
          email: data.body.email,
          firstname: data.body.firstName,
          lastname: data.body.lastName,
          username: data.body.userName,
        };
        console.log(userData)
        dispatch(setProfile(userData));
        editUser(userData.username);
      } else {
        console.log('Erreur lors de la récupération du profil utilisateur');
      }
      } catch(error) {
        console.log(error);
      }
    };
    userData();
  }
}, [dispatch, token]);

const handleEdit = async (e) => {
e.preventDefault();

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({userName}),
    });
    if (response.ok) {
      const data = await response.json();
      const userName = data.body.userName;
      dispatch(editUser(userName));
      console.log(userData)
      setShow(!show)
    } else {
      console.log('Changement utilisateur incorrect');
    } 
  } catch(error) {
     console.log(error);
  }
};

  return (
  <main className='main bg-dark'>
 
      {show ? (
           <div className='header'>
    <h1>Welcome back !<br/><span id='fullName'> {userData.firstname}</span></h1> 
      <button className='edit-button' id='edit-button' type='button' onClick={()=> setShow(!show)}>Edit Name</button>
      </div>
      ) : (
      <div id='edit-section'>
        <form name='edit'>
          <div className='profil-input-wrapper'>
            <label htmlFor='userName'>Username :</label>
            <input type='text' id='userName' defaultValue={userData.username} onChange={(e)=> setUserName(e.target.value)}/>
          </div>
          <div className='edit-input'>
            <label htmlFor='firstname'>First name:</label>
            <input type='text' id='firstname' defaultValue={userData.firstname} disabled={true} />
          </div>
        </form>
        <div className='btn-form'>
          <button type='submit' className='save-button' onClick={handleEdit}>Save</button>
          <button type='button' className='cancel-button' onClick={() => setShow(!show)}>Cancel</button>
        </div>
      </div>
      )}
    
  </main>
  
  )
}

export default user