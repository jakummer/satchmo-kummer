import React from 'react';
import logo from '../assets/images/satchmologo.jpg';
import NavBar from './NavBar.js';


function Header(){
return(<header className="App-header">
   <div><img src={logo} alt="logo"/></div>
   <div><NavBar/></div>

   </header>
  

)
}

export default Header;
