import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logoHeader from '../../assets/img/argentBankLogo.png'

import { logout } from '../../redux/actions/authAction.jsx'
import {useSelector, useDispatch} from 'react-redux'


function header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstname = useSelector((state) => state.user.userData.firstname);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header>
        <nav className='main-nav'>
            <Link to='/' className='main-nav-logo'>
                <img src={logoHeader} alt='Argent Bank logo' className='main-nav-logo-image' />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            {isLoggedIn? (
            <div className='container-user'>
                <Link to='/profile' className='container-info'>
                <i className="fa fa-user-circle"></i>
                <p>{firstname}</p>
                </Link>
                <Link to='/' onClick={handleLogout} className='main-nav-item'>
                <i className="fa fa-sign-out" />
                <p>Sign Out</p>
                </Link>
            </div>
            ):(
              <Link to='/login' className='main-nav-item'>
                <i className="fa fa-user-circle"></i>
                <p>Sign In</p>
              </Link>
            )}
        </nav>
    </header>
  )
}

export default header