import ItemCount from "./itemCount"

const ItemDetail = ({juegos}) => {
    return(
            <div>
                <img src={juegos.imagen} className="" alt="imagen Porducto" />
                    <h3 className="">{juegos.nombre}</h3>
                    <p>{juegos.descripcion}</p>
                    <p className= "">Stock {juegos.stock}</p>
                    <p className="">${juegos.precio}</p>
                <ItemCount />
            </div>
    )
}

export default ItemDetail

