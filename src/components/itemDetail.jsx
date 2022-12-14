import ItemCount from "./itemCount"

const ItemDetail = ({juegos}) => {
    return(
            <div className="gridDetailItems" >
                <img src={juegos.imagen} className="tamaĆ±oImagenDetail" alt="imagen Porducto" />
                <div className="divPaddingLeft">
                    <h3 className="tituloItemDetail">{juegos.nombre}</h3>
                    <p className= "descripcionItemDetail">{juegos.descripcion}</p>
                    <p className= "stockItemDetail">Stock {juegos.stock}</p>
                    <p className="precioItemDetail">${juegos.precio}</p>
                <ItemCount className="aĆ±adirCarritoItemDetail"/>
                </div>
            </div>
    )
}

export default ItemDetail

