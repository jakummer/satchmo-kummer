import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({items}) =>{
    console.log(items)
    return (
       
        <div class="containerDetail">
                <br></br>
                <div class="cardDetail">
                    <br></br>
                    <img src={items.imgItemDetailURL} alt={items.title}/>
                    <br></br>
                     <h4>{items.title}</h4>
                     <h6>{items.detail}</h6>
                     <br></br> 
                     <ItemCount stock={items.stock}/>
                     <br></br>
                </div>
            </div>
    );
};

export default ItemDetail;