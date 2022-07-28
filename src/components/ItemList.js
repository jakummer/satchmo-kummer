import React from 'react';
import Item from './Item';
import { useState, useEffect } from "react";

const ItemList = ({items}) =>{
    
    return (
    <div>
        {
         items.map((item) =>(
            <Item item={item} key={items.id} />
         ))},

    </div>
    );
};

export default ItemList;