import './App.css'
import AdminKatalog from './commponents/AdminKatalog'
import Header from './commponents/Header'
import Katalog from './commponents/Katalog'
import Korz from './commponents/Korz'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Katalog/>}></Route>
          <Route path="/korthina" element={<Korz/>}></Route>
          <Route path='/admin' element={<AdminKatalog/>}/>
        </Routes> 
    </>
  )
}

export default App
