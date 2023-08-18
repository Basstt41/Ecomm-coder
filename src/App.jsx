import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

// Los archivos que tienen que crear:

// Navbar.jsx

// CartWidget.jsx

// ItemListContainer.jsx

const Texto = ({text}) => {
  return (
    <div>
      {text}
    </div>
  )
}

const Botton = ({callback, inenr}) => {
  return (
    <button onClick={callback}>
      {inenr}
    </button>
  )
} 

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer text="Saludos terricolas" />
    </>
  )
}

export default App
