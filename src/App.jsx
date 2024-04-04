import './App.css'
import AdminKatalog from './commponents/AdminKatalog'
import SignIn from './commponents/Authentication/SignIn'
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
          <Route path='/reg' element={<SignIn/>}/>
          <Route path='/vhod' element={<SignUp/>}/>
          <Route path="/korthina" element={<Korz/>}/>
          <Route path='/admin' element={<AdminKatalog/>}/>
        </Routes> 
    </>
  )
}

export default App
