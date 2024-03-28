import React from 'react'
import Account from '../../component/account/account.jsx'

function user() {
  return (
  <main className='main bg-dark'>
    <div className='header'>
      <h1>Welcome back<br/><span id='fullName'> Tony</span></h1>  
      <button className='edit-button' id='edit-button' type='button'>Edit Name</button>
      
      <div id='edit-section'>
        <form name='edit'>
          <div className='profil-input-wrapper'>
            <label htmlFor='userName'>User name :</label>
            <input type='text' id='userName' />
          </div>
        </form>
        <div className='btn-form'>
          <button type='submit' className='save-button'>Save</button>
          <button type='button' className='cancel-button'>Cancel</button>
        </div>
      </div>
    </div>

    <h2 className='sr-only'>Account</h2>

    <Account
    title='Argent Bank Checking'
    accountNumber='x8349'
    amount='$2,082.79'
    description='Available Balance'
    />
    <Account 
    title='Argent Bank Savings'
    accountNumber='x6712'
    amount='$10,928.42'
    description="Available Balance"
    />
    <Account
    title='Argent Bank Credit Card'
    accountNumber='x8349'
    amount='$184.30'
    description='Current Balance'
    />'
    
  </main>
  )
}

export default user
