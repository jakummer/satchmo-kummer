 import Item from "./Item";
 import React, { useState } from 'react';


function ItemList({productos}){
    return(
    <Item>
        <ul>
            {productos.map(u => <li key={u.id}>{u.title} </li>)};    
        </ul>
        
    </Item>


    /*return (<ul>
       {productos.map(u => <li key={u.id}>{u.title} </li>)};
    </ul>
    )*/
    )
};

export default ItemList;