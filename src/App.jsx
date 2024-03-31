import { useState } from 'react'
import './App.css'
import Header from './commponents/Header'
import Katalog from './commponents/Katalog'
import Korz from './commponents/Korz'
import { Routes, Route } from 'react-router-dom'
import {SomeContext} from './commponents/context'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart (prevCart => [...prevCart, product]);
  }

  return (
    <>
      <SomeContext.Provider value={{ cart, addToCart }}>
        <Routes>
          <Route path="/" element={<> <Header/> <Katalog/> </>}></Route>
          <Route path="/korthina" element={<> <Header/> <Korz/> </>}></Route>
        </Routes>
      </SomeContext.Provider> 
      
    </>
  )
}

export default App
