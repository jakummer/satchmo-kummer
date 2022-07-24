import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import lista from "../mock/productsmock";
import { useParams } from 'react-router-dom';
 

const ItemDetailContainer = () => {
  const [items, setItem] = useState([])
  const {id} = useParams()
    
  
  const traerItemPorId = () =>{
    return new Promise((resolve) => {
      setTimeout(()=>{
           resolve(lista.find(obj => obj.id === id))
           }, 500)
    })
  }
  
  
  useEffect(()=>{
    traerItemPorId().then(respuesta=>{
    setItem(respuesta)
    })
  },[])
    
  
  return(
    <ItemDetail items={items}/>
  )
  } 
   
  export default ItemDetailContainer
