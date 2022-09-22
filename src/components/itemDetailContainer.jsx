import { useEffect, useState } from "react";
import alertaCargando from "../utils/alertaCargando";
import juegos from "../utils/dataBase";
import ItemDetail from "./itemDetail";


const promesaMostrarJuegos = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(juegos[0]);
            reject("Error en la const promesaMostrarJuegos")
        }, 2000)
    })
}

const ItemDetailContainer = (props) => {
    const[datoProducto, setdatoProducto] = useState({});
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        promesaMostrarJuegos()
        .then((response) => setdatoProducto(response))
        .catch((err) => console.error (err))
        .finally(()=> setLoading(false))
    }, [])
    console.log(datoProducto)
    return(
        <div>
            <div> 
            {loading ? alertaCargando() : <ItemDetail juegos={datoProducto} />}
                
            </div>
        </div>

    );
}

export default ItemDetailContainer;