import ItemCount from "./itemCount";


const ItemListContainer = (props) => {
    return(
        <div>
            <h1>Hola {props.greeting}</h1>
            <ItemCount />
        </div>
        
    );
}
export default ItemListContainer;