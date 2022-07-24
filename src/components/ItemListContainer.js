import React from 'react';
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import lista from "../mock/productsmock";
import { useParams } from 'react-router-dom';
 

const ItemListContainer = () =>{
  const [items, setItems] = useState([])
  const { categoria } = useParams()
  
  const traerItems = () => {
  return new Promise((resolve)=>{
  
  setTimeout(()=>{
         resolve(categoria ? lista.filter(obj => obj.category === categoria): lista )
    }, 500)
  })
}
  
   
  
  useEffect(()=>{
    traerItems().then(res => {
    setItems(res)
    })
  },[categoria])
  
   
  
  return(
    <ItemList items={items}/>
    )
  
   
  }
  
  export default ItemListContainer
  
   
  
   