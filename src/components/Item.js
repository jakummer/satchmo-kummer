import React from 'react';
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';

const Item = ({products})=>{
    <br></br>
    return(

            <div class="container">
                <br></br>
                <div class="card">
                    <br></br>
                    <img src={products.imgItemURL} alt="" />
                    <br></br>
                     {products.title}
                     <br></br><br></br>
                     <Link to ={`/item/${products.id}`}><button>DETALLE</button></Link>
                     <br></br>  
                     <ItemCount stock={products.stock}/>
                     <br></br>
                </div>
            </div>
       
     
    ) 


}

export default Item;