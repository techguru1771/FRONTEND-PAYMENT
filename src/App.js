import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Genetics from './pages/Genetics'
import PaystackIntegation from './components/PaystackIntegation'
import Contact from './components/Contact'
import About from './components/About'
import Welcome from './pages/Welcome'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Genetics/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path= '/Welcome' element ={<Welcome/>}/>
        <Route path= '/Register' element={<Register/>}/>
        <Route path= '/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/paymentgateway' element={<PaystackIntegation/>}/>
      </Routes>
    </Router>
    
  )
}

export default App