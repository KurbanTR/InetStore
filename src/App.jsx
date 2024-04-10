import './App.css'
import AdminKatalog from './components/AdminKatalog'
import Profil from './components/Authentication/Profil'
import LoginIn from './components/Authentication/LoginIn'
import SignUp from './components/Authentication/SignUp'
import Header from './components/Header'
import Katalog from './components/Katalog'
import Korz from './components/Korz'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { ProductData } from './components/store/todoReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ProductData())
  }, [])

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Katalog/>}/>
          <Route path='/reg' element={<SignUp/>}/>
          <Route path='/vhod' element={<LoginIn/>}/>
          <Route path='/profil' element={<Profil/>}/>
          <Route path="/korthina" element={<Korz/>}/>
          <Route path='/admin' element={<AdminKatalog/>}/>
        </Routes> 
    </>
  )
}

export default App
