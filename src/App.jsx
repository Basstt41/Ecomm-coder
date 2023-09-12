import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


// Los archivos que tienen que crear:

// Navbar.jsx

// CartWidget.jsx

// ItemListContainer.jsx





function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />}/> 
          <Route  path='/detalle/:producto' element={<ItemDetailContainer />} />
        </Routes >
      </BrowserRouter>
      
    </>
  )
}

export default App
