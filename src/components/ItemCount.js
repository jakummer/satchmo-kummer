
import React, { useState } from 'react';

function ItemCount(){

    const [contador, setCount] = useState(0);
    
    const click_1 = () => {setCount(contador + 1);};
    const click_2 = () => {setCount(contador - 1);};
    
return(
    <div  class="contenedor" >
        <div class="contenedor" ><button onClick={click_2} > - </button><button>{contador}</button><button onClick={click_1}> + </button></div>
        <button>Agregar al carrito</button> 
    
    </div>
    );
};

export default ItemCount;