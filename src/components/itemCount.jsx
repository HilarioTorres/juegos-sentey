import { useState } from "react";

const ItemCount = () =>{
    const [stockParaCarrito, setstockParaCarrito] = useState (0);

    const aumentar = () =>{
        setstockParaCarrito(stockParaCarrito+1);
    }

    const disminuir = () =>{
        setstockParaCarrito(stockParaCarrito-1);
    }

    const alerta = () =>{
        alert ("Se añadio al carrito")
    }

return(
    <div className="d-flex justify-content-center gap-3">
        <button onClick={aumentar} type="button" className="btn btn-outline-primary">+</button>
        <p>{stockParaCarrito}</p>
        <button onClick={disminuir} type="button" className="btn btn-outline-primary">-</button>
        <button onClick={alerta} type="button" className="btn btn-outline-primary">Añadir al carro</button>
    </div>

)
}


export default ItemCount;