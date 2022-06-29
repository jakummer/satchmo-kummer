import logo from './satchmologo.jpg';
import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <div><img src={logo} alt="logo"/>
        <NavBar/>
        </div>
      </header>
    </div>


  );
}

export default App;
