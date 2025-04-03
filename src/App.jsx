


import {Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Loginpage from './pages/Loginpage'
import Drive from './pages/Drive'
import Ride from './pages/Ride'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Herosection/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/ride' element={<Ride/>}/>
        <Route path='/drive' element={<Drive/>}/>

      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
