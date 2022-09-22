import ItemCount from "./itemCount";
const Item = ({juego}) => {
    return(
            <div className="card" style={{ width: '18rem' }}>
                <img src={juego.imagen} className="card-img-top tamaño-Imagen-Catalogo" alt="imagen Porducto" />
                <div className="card-body">
                    <h3 className="card-title">{juego.nombre}</h3>
                    <h4 className= "card-subtitle mb-2 text-muted">Stock {juego.stock}</h4>
                    <p className="card-text">${juego.precio}</p>
                </div>
                <ItemCount />
            </div>
    )
}

export default Item;