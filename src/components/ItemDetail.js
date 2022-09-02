import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { CartContext } from './cartContext';
//import CartWidget from './CartWidget';
 

const ItemDetail = ({item}) =>{
    const [cantidad, setCantidad] = useState(0);
    const { addToCart} = useContext(CartContext);
    //const navigate = useNavigate();
    
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
       
    };
 
    return (
    
        <div className="containerDetail">
                <br></br>
                <div className="cardDetail">
                    <br></br>
                    <img className="imgDetail" src={item.imgItem} alt={item.title}/>
                    <br></br>
                     <h4>{item.title}</h4>
                     <h5>{item.detail}</h5>
                     <h4>$ {item.price}</h4>
                    
                     {cantidad === 0 ? (
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        ) : (
                        <Link to = "/">Producto agregado al carrito.</Link>
                        )}

                      <br></br> 
                     <br></br>
                </div>
            </div>
    );
};

export default ItemDetail; 