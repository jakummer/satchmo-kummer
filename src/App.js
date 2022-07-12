import logo from './satchmologo.jpg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';



function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <div><img src={logo} alt="logo"/>
        <NavBar/>
        </div>
       <div>
       

       </div>
      </header>
      <body>
     
        <ItemListContainer />
      </body>
    </div>


  );
}

export default App;
