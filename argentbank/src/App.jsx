import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './component/header/header.jsx'
import Footer from './component/footer/footer.jsx'

import Home from './pages/home/home.jsx'
import Login from './pages/login/login.jsx'
import User from './pages/user/user.jsx'

function App() {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<User/>} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
    
  )
}

export default App
