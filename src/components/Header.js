import React from 'react';
import logo from '../assets/images/satchmologo.jpg';
import NavBar from './NavBar.js';
import {Link, NavLink} from "react-router-dom"
import CartWidget from './CartWidget';


function Header(){
return(<header className="App-header">
   <Link to="/" ><img src={logo} alt="logo"/></Link>
   <div><NavBar/></div>
   <div><CartWidget/></div>
      
   </header>
  

)
}

export default Header;
