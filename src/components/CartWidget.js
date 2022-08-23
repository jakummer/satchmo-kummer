import logo_chart from '../assets/images/chart_icon_6.jpg';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './cartContext';
import { NavLink, Link, useNavigate} from 'react-router-dom'
import Item from './Item';
 
let TotalItems = 0


function CartWidget() {
  const {cart} = useContext(CartContext);
  const [totalitems, setTotalItems] = useState(0);
  const navigate = useNavigate();

  const onAddTotal = () => {
    if (cart.length == 0){
      let TotalItems = 0;
      console.log("Total Items",TotalItems );
      setTotalItems(TotalItems);
    }else{
      let TotalItems = cart.reduce((prevalue, nextvalue) => prevalue + (nextvalue['cantidad'] || 0), 0);
      console.log("Total Items",TotalItems );
      setTotalItems(TotalItems);
    }

};
 
 
useEffect(() => {
   onAddTotal();
}, [cart]);

  


  return (
    <>
    <div class="divChart">
        <img class="chart_image" src={logo_chart} alt="logo"/>
        <div class="textChart"> {totalitems} </div>
       
    </div>
        
    <div><button onClick={() => navigate('/cart')}>Ir al carrito</button></div>
    </>
    
)};
 

export default CartWidget;
  