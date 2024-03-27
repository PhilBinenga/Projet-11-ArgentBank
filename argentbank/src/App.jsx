import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

import Header from './component/header/header.jsx'
import Footer from './component/footer/footer.jsx'

import Home from './pages/home/home.jsx'
import Login from './pages/login/login.jsx'
import User from './pages/user/user.jsx'
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
