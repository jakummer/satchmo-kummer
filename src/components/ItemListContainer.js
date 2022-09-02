import React from 'react';
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore" 


export const ItemListContainer = () =>{
  const [items, setItems] = useState([])
  const { category } = useParams();


  const getItems = async() => {
    const db = getFirestore();

   let qy;
    if (category == undefined){
      qy = query(collection(db, 'items'));
    }else{
      qy = query(collection(db, 'items'), where('categoryId', '==', category));
    }
    
         
    await getDocs(qy).then((snapshot) => {
      const dataItem = snapshot.docs.map((datos)=> {
        return {...datos.data(), id: datos.id};

      });
      setItems(dataItem);
    
    });

  };
   

 useEffect(()=>{
    getItems();
  
},[category])
  
  
  return(
    <div className="listContainer">
      <ItemList items={items} />

    </div>

    );
  
  };
  
  export default ItemListContainer;
  