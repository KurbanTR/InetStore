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
import {useDispatch, useSelector} from 'react-redux'
import { ProductData } from './store/todoReducer'

function App() {
  const {isAdmin} = useSelector((state) => state.user)
  const {products} = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ProductData())
  }, [products])

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={isAdmin ? <AdminKatalog/> : <Katalog/>}/>
          <Route path='/reg' element={<SignUp/>}/>
          <Route path='/vhod' element={<LoginIn/>}/>
          <Route path='/profil' element={<Profil/>}/>
          <Route path="/korthina" element={<Korz/>}/>
        </Routes> 
    </>
  )
}

export default App
