import React from 'react';
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';

const Item = ({items})=>{
    <br></br>
    return(

            <div class="container">
                <br></br>
                <div class="card">
                    <br></br>
                    <img src={items.imgItemURL} alt={items.title} />
                    <br></br>
                     {items.title}
                     <br></br><br></br>
                     <Link to ={`/item/${items.id}`}><button>Ver Detalle</button></Link>
                     <br></br>  
                     <br></br>
                     Stock: {items.stock} unid.
                </div>
            </div>
       
    ) 
}

export default Item;