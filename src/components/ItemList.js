import React from 'react';
import Item from './Item';
//import { useState, useEffect } from "react";
//import { collection, getFirestore } from "firebase/firestore";


const ItemList = ({items, setFilterValue}) =>{
   
     return (
     <div class="itemListContainer">
        {
         items.map((item) =>(
            <Item item={item} />
         ))},

    </div>

    );
};

export default ItemList;