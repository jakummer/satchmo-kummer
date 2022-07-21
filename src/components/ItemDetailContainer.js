import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "../mock/productsmock";
import { useParams } from 'react-router-dom';
 

const ItemDetailContainer = () =>{
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(()=> {
        const traerProductos = new Promise((res,rej) =>{
            setTimeout(()=> {
                res(products.find(obj => obj.id === id))
            },1000);  
      });
      traerProductos
      .then((data)=>{
        setItems(data);
   
      })
      .catch((error)=> {
        console.log(error);
      });

    },[]);
    

   return (
         <ItemDetail products = {products} />
    );
}

export default ItemDetailContainer