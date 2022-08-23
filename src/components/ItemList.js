import React from 'react';
import Item from './Item';
import { useState, useEffect } from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";


const ItemList = ({items, setFilterValue}) =>{
    //const createOrder


     return (
     <div class="itemListContainer">
        {
         items.map((item) =>(
            <Item item={item} key={items.id} />
         ))},

    </div>

    );
};

export default ItemList;