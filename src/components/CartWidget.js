import React, { useState } from 'react';


function CartWidget() {
  const [contador, setContador] = useState(0);
       
  const click = () => {
    setContador(contador + 1);
    };


  return (
    <div  onClick={click}>
        <h5>
            Carrito: {contador} {contador === 1 ? 'productos' : 'productos'}
        </h5>
    
    </div>
)};


export default CartWidget;
  