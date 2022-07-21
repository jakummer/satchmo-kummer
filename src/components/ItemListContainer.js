import React from 'react';
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "../mock/productsmock";
import { useParams } from 'react-router-dom';
 

const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const { categoria } = useParams()

    useEffect(()=> {
      const traerProductos = new Promise((res,rej) =>{
          setTimeout(()=> {
              res(categoria ? products.filter(obj => obj.category === categoria) : products)
          },500);  
    });
    traerProductos
    .then((data)=>{
      setItems(data);
 
    })
    .catch((error)=> {
      console.log(error);
    });

  },[categoria]);
    

   return (
         <ItemList products = {products} />
    );
}

export default ItemListContainer