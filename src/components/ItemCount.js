import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";

function ItemCount({stock, initial, onAdd}){

    const [contador, setCount] = useState(initial);
    
        const click_1 = () => {
            if (stock > contador){
                setCount(contador + 1);
            }
        };
    
        const click_2 = () => {
            if (contador > 1){
                setCount(contador - 1);  
            }
        };

 
return(
    
    <div>
        <br></br>
        <div class="contenedor" ><button onClick={click_2} > - </button><button>{contador}</button><button onClick={click_1}> + </button></div>
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    
    </div>
    );
};

export default ItemCount;