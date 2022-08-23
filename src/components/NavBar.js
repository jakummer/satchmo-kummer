import React from 'react'
import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom"

 

function NavBar(){
return(
   <nav> 
        <div>
           <ul>
                <li><NavLink to = "/">Inicio</NavLink></li>
                <li><a href="#">Quienes somos</a></li>
                <li><NavLink to = "/categorias/instrumentos">Instrumentos Musicales</NavLink></li>
                <li><NavLink to = "/categorias/sonido">Sonido</NavLink></li>
                <li><a href="#">Contacto</a></li>
               
           </ul>
        </div>
    </nav>
     
        );
};

export default NavBar;


       
    