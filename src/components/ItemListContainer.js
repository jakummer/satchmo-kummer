import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(){
return(
       
        <div>
         
            Nuestros productos: 
            <ul>
                <li>Trompetas</li>
                <ItemCount />
                <p></p>
                <li>Saxos</li>
                <ItemCount />
                <p></p>
                <li>Clarinetes</li>
                <ItemCount />
                <p></p>
                <li>Trombones</li>
                <ItemCount />
                <p></p>
                <li>Guitarras</li>
                <ItemCount />
                <p></p>
                <li>Pianos</li>
                <ItemCount />
                <p></p>
                <li>Percusión</li>
                <ItemCount />
                <p></p>
            </ul>

        </div>

        );
};

export default ItemListContainer;
