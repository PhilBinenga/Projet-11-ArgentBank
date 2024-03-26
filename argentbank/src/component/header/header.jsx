import React from 'react'
import {Link} from 'react-router-dom'
import logoHeader from '../../assets/img/argentBankLogo.png'

function header() {
  return (
    <header>
        <nav className='main-nav'>
            <Link to='/' className='main-nav-logo'>
                <img src={logoHeader} alt='Argent Bank logo' className='main-nav-logo-image' />
            </Link>
            <h1 className='sr-only'>Argent Bank</h1>
            <div>
                <Link to='/login' className='main-nav-item'>
                <i class="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default header
