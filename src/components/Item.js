import React from 'react';
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';

const Item = ({item})=>{
    <br></br>
    return(

            <div class="container">
                <br></br>
                <div class="card">
                    <br></br>
                    <img src={item.imgItemURL} alt={item.title} />
                    <br></br>
                     {item.title}
                     <br></br><br></br>
                     {item.price}
                     <br></br><br></br>
                     <Link to ={`/item/${item.id}`}><button>Ver Detalle</button></Link>
                     <br></br>  
                     
                     <br></br>
                     <br></br>
                     Stock: {item.stock} unid.
                </div>
            </div>
       
    )  
}

export default Item;