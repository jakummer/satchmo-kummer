import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
   <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categorias/:category" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
   </BrowserRouter> 

  );
}

export default App;
