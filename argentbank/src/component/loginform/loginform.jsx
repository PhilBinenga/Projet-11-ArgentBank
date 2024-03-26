import React from 'react'

function loginform() {
  return (
    <form>
        <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
        </div>
        <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
        </div>
        <button type='submit' className='sign-in-button'>Sign In</button>
    </form>
  )
}

export default loginform
