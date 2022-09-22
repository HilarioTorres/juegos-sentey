import { useEffect, useState } from "react";
import alertaCargando from "../utils/alertaCargando";
import juegos from "../utils/dataBase";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = (props) => {
    const[datoProducto, setdatoProducto] = useState({});
    const[loading, setLoading] = useState(false);
    const{ id } = useParams();
    const promesaMostrarJuegos = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(juegos.find(producto => producto.id === parseInt(id)));
                reject("Error en la const promesaMostrarJuegos")
            }, 2000)
        })
    }
    useEffect(()=>{
        setLoading(true);
        promesaMostrarJuegos()
        .then((response) => setdatoProducto(response))
        .catch((err) => console.error (err))
        .finally(()=> setLoading(false))
    }, [])
    return(
        <div>
            <div> 
            {loading ? alertaCargando() : <ItemDetail juegos={datoProducto} />}
                
            </div>
        </div>

    );
}

export default ItemDetailContainer;