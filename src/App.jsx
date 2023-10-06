import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartContexProvider } from './context/cartContext'
import Checkout from './components/Checkout'




function App() {

  return (
    <CartContexProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />}/> 
          <Route  path='/detalle/:producto' element={<ItemDetailContainer />} />
          <Route  path='/Cart' element={<Cart />} />
          <Route path='/checkout'element={<Checkout />}></Route>
        </Routes >
      </BrowserRouter>
      
    </CartContexProvider>
  )
}

export default App
