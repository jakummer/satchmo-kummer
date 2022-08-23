import { createContext, useEffect } from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";

//1- crear contexto
export const CartContext = createContext()

//2- creamos nuestro componente como capa de abstracción y llamamos a los children
// pantalla nuevamente los componentes
let cantidadTotal =0
const Provider = (props) => {
    const [cart, setCart] = useState([]);
    const [totalfinal, setTotalFinal] = useState(0);

    
    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }

    // const addQty = (id, cantidad) =>{
    //     let indexItem = cart.findIndex(prod => prod.id === id);
    //     let auxItems = [...cart];
    //     let newcantidad = auxItems[indexItem].cantidad + cantidad;
    //     auxItems[indexItem] = {...auxItems[indexItem], cantidad: newcantidad};
    //     setCart(auxItems);
    // }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

   
    const addToCart = (item, cantidad) => {
         setCart([...cart, {...item, cantidad},]);
     
    }

    const vaciarCart = () => {
        setCart([]);
   }

   const borrarItem = (title) => {
    const nuevoArray = cart.filter((item)=>item.title!==title);
    setCart(nuevoArray);
  }


  const calcularTotalFinal = () => {
    let TotalFinal = cart.reduce((prevalue, nextvalue) => prevalue + (nextvalue['price'] * nextvalue['cantidad'] || 0), 0);
    return(TotalFinal);
    setTotalFinal(TotalFinal);
    
  }


return(
    <CartContext.Provider value ={{cart, addToCart, vaciarCart, borrarItem, calcularTotalFinal }}>
         {props.children}
    </CartContext.Provider>
)

}

export default Provider