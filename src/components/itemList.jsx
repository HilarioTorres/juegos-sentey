import Item from "./item";
const ItemList =({ juegos })=> {
    return(
        <>
        {juegos.map((juego)=> <Item key={juego.id} juego={juego} /> ) }
        </>
    );
}

export default ItemList;