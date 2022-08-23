import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Provider from './components/cartContext';
import CartContainer from './components/CartContainer';


function App() {
  return (
   <Provider>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/categorias/:category" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path ="/cart" element={<CartContainer />} />
          </Routes>
      </BrowserRouter> 
   </Provider>

  );
}

export default App;
