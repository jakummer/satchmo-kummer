import React from 'react';
import Item from './Item';

const ItemList = ({items}) =>{
    
    return (
    <div>
        {
         items.map((items) =>(
            <Item items={items} key={items.id} />
         ))},
         
    </div>
    );
};

export default ItemList;