import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import lista from "../mock/productsmock";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
 

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState([]);
  const { id } = useParams();
    
  const getItem = async() => {
    const db = getFirestore();

    const itemConfig = doc(db, 'items', id);
    getDoc(itemConfig).then((snapshot) => {
      setItem(snapshot.data());
     
      console.log("ee",snapshot.data());
 
    });
  }; 


  useEffect(()=>{
      getItem();
  }, []);


  
  return(
    <ItemDetail item={item}/>
  );
};
   
  export default ItemDetailContainer;
