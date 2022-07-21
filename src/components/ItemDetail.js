import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({products}) =>{
    console.log(products)
    return (
       
        <div class="containerDetail">
                <br></br>
                <div class="cardDetail">
                    <br></br>
                    <img src={products.imgItemDetailURL} alt={products.title}/>
                    <br></br>
                     {products.title}
                     <h4>{products.title}</h4>
                     <h6>{products.detail}</h6>
                     <br></br><br></br>
                     <br></br>  
                     <ItemCount stock={products.stock}/>
                     <br></br>
                </div>
            </div>
    );
};

export default ItemDetail;