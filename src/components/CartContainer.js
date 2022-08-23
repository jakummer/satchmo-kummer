
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './cartContext';
import { addDoc, collection, getFirestore, doc, updateDoc} from 'firebase/firestore';
import { Link, NavLink } from "react-router-dom"


const CartContainer = () => {
  const { cart, vaciarCart, borrarItem, calcularTotalFinal } = useContext(CartContext);
  const [totalfinal, setTotalFinal] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [nombreBuyer, setNombre] = useState('');
  const [apellidoBuyer, setApellido] = useState('');
  const [celularBuyer, setCelular] = useState('');
  const [emailBuyer, setEmail] = useState('');
  const [orderOK, setOrderOK] = useState('N');
  const [mostrarBtn, setMostrarBtn] = useState(false);
 

  useEffect(() => {
     setTotalFinal(calcularTotalFinal());
 }, [cart]);
 

  const createOrder = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollectionQuery = collection(db, 'orders');
    const order = {
      buyer: { name: nombreBuyer, lastname: apellidoBuyer, phone: celularBuyer, email: emailBuyer}, 
      items: cart.map((items) => ({
        name: items.title,
        price: items.price,
        quantity: items.cantidad

      })),

      total: cart.reduce(
        (acc, item) => acc + item.price * item.cantidad, 0),

    };

 

    await addDoc(orderCollectionQuery, order)
      .then((response) => {
        setOrderId(response.id);
        vaciarCart();
        alert("Orden generada con éxito.")
            
      })

      .catch((error) => {
        console.log(error);
      });

  };

 
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h3>Tu Carrito de Compras</h3>
        <p>No tienes artículos cargados.</p>
      </div>

    );

  }

 



  return (

    <div className="cart-container">
      <h3>Tu Carrito de Compras</h3>
      <div>
        <table className='table_titles'>
             <tr>
             <td width="500px">Artículos</td>
             <td width="150px">Cantidad</td>
             <td width="250px" text-align="right">Precio Unit.</td>
             <td width="250px" text-align="right">Eliminar Items</td>
             </tr>
         </table>

        {/* <ul className="ulcart"> */}
          {cart?.map((item, index) => (
         <table >
            <tr>
             <td width="500px">{item?.title}</td>
             <td width="150px">{item?.cantidad}</td>
             <td width="250px" text-align="right">$ {item?.price}</td>
             <td><button onClick={()=>{borrarItem(item.title)}}>X</button></td>
            </tr>
            
         </table>
           

          ))}
        {/* </ul> */}
       </div>
      
      <div>
        <table>
        <tr>
            </tr><tr>
            </tr><tr>
            </tr><tr>
            <td width="250px" text-align="center"><h3>Total a Pagar: $ {totalfinal}</h3></td>
            </tr>

        </table>
      </div>

      <div id="cargaPersonal">
            <br></br><br></br>
            <p>Ingrese Nombre<br></br><input onChange={event => setNombre(event.target.value)} type="text" id="nombre"></input></p>
            <p>Ingrese Apellido<br></br><input onChange={event => setApellido(event.target.value)} type="text" id="apellido"></input></p>
            <p>Ingrese Nro. Celular<br></br><input onChange={event => setCelular(event.target.value)} type="text" id="nrocelular"></input></p>
            <p>Ingrese email<br></br><input onChange={event => setEmail(event.target.value)} id="email"></input></p>
       </div>

        <div>
          <br></br><br></br>
          <button onClick={createOrder} disable={mostrarBtn}> Crear orden </button>
       
          </div>
          <div>
              <br></br>
              {orderOK ==="N" ? (
                 <p>**** Proceso de Generación de Orden Compra. Verifique sus datos. ****</p>
                ) : (
                 
                  <Link to = "/">**** Volver ****</Link>
                )}
            </div>
       

      </div>

  );

};

 

export default CartContainer;