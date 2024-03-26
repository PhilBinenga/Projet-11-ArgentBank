import React from 'react'
import Loginform from '../../component/loginform/loginform.jsx'

function login() {
  return (
    <main className='main bg-dark'>
        <section className='sign-in-content'>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Loginform />
        </section>
    </main>
  )
}

export default login
