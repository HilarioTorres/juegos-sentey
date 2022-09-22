import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = (juego) =>{
    const [stockParaCarrito, setstockParaCarrito] = useState (0);

    
    const aumentar = () =>{
        if (stockParaCarrito <= 9) {
            setstockParaCarrito(stockParaCarrito+1);
        }else{            
            Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Stock insuficiente',
        })}
        
    }

    const disminuir = () =>{
        if (stockParaCarrito >= 1) {
            setstockParaCarrito(stockParaCarrito - 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No puede disminuir el carrito',
            })
        }
    }

    const alerta = () =>{
        Swal.fire(
            'Se añadio al carrito',
            'Disfrute de su compra',
            'success'
            )
        setstockParaCarrito(0)
    }

return(
    <div className="d-flex justify-content-center gap-3 align-items-baseline">
        <button onClick={aumentar} type="button" className="btn btn-outline-primary">+</button>
        <p>{stockParaCarrito}</p>
        <button onClick={disminuir} type="button" className="btn btn-outline-primary">-</button>
        <button onClick={alerta} type="button" className="btn btn-outline-primary">Añadir al carro</button>
    </div>

)
}


export default ItemCount;