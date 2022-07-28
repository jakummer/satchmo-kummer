import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import { CartContext } from './cartContext';


const ItemDetail = ({items}) =>{
    const [cantidad, setCantidad] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(items, cantidad);
    };
 
    return (
       
        <div class="containerDetail">
                <br></br>
                <div class="cardDetail">
                    <br></br>
                    <img src={items.imgItemDetailURL} alt={items.title}/>
                    <br></br>
                     <h4>{items.title}</h4>
                     <h6>{items.detail}</h6>
                     <h6>{items.price}</h6>
                     <br></br> 
                     {cantidad === 0 ? (
                        <ItemCount stock={items.stock} onAdd={onAdd} />
                        ) : (
                        <Link to = "/cart">Ir al carrito</Link>
                        )}
                     
                     <br></br>
                </div>
            </div>
    );
};

export default ItemDetail; 