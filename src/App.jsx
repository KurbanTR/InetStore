import './App.css'
import AdminKatalog from './commponents/AdminKatalog'
import Profil from './commponents/Authentication/Profil'
import LoginIn from './commponents/Authentication/LoginIn'
import SignUp from './commponents/Authentication/SignUp'
import Header from './commponents/Header'
import Katalog from './commponents/Katalog'
import Korz from './commponents/Korz'
import { Routes, Route } from 'react-router-dom'

function App() {

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
