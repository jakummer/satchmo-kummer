import { useState } from "react";
import ItemCount from "./ItemCount";
 

function Item(){
    
    const [productos, setProductos] = useState([
        {id: 1001, title:'TROMPETA YAMAHA', price: '$ 340.000,00', pictureURL:'', stock: '5', initial:'0'},
        {id: 1002, title:'SAXO YAMAHA', price: '$ 240.000,00', pictureURL:'', stock: '7', initial:'0'},
        {id: 1003, title:'CLARINETE BUFFET', price: '$ 660.000,00', pictureURL:'', stock: '5', initial:'0'},
        {id: 1004, title:'TROMBON SELMER', price: '$ 240.000,00', pictureURL:'', stock: '8', initial:'0'},
        {id: 1005, title:'GUITARRA ELECTRICA LEONARD', price: '$ 36.190,00', pictureURL:'', stock: '6', initial:'0'},
        {id: 1006, title:'PIANO ELECTRICO YAMAHA', price: '$ 740.000,00', pictureURL:'', stock: '12', initial:'0'},
        {id: 1007, title:'PIANO ELECTRICO YAMAHA', price: '$ 740.000,00', pictureURL:'', stock: '10', initial:'0'},
        {id: 1007, title:'REDOBLANTE', price: '$ 40.000,00', pictureURL:'', stock: '5', initial:'0'}
        
        
    ])
     

    return (
        <div>
            <ul>
                {productos.map(u => <li key={u.id}> {u.title} {u.price} {u.pictureURL} <ItemCount stock={u.stock} initial={u.initial}/></li>)}
            </ul>
        </div>
    )
};

export default Item;