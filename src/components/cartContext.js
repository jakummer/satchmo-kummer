import { createContext } from "react";
import { useState } from "react";

//1- crear contexto
export const CartContext = createContext()

//2- creamos nuestro componente como capa de abstracción y llamamos a los children
// pantalla nuevamente los componentes

const Provider = (props) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) =>{
        return cart.some(prod => prod.id ===id)
    }


    const addToCart = (item, cantidad) => {
       if (isInCart(item.id)) {
        alert('ya esta en el carrito');
        
       } else {
        
        setCart([...cart, {...item, cantidad}]);
       }

    }


return(
    <CartContext.Provider value ={{cart, addToCart}}> {props.children}
        
    </CartContext.Provider>
)

}

export default Provider