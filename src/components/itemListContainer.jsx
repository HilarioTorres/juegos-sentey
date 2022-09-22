import React, { useEffect, useState } from "react";
import juegos from "../utils/dataBase";
import ItemList from "./itemList";
import alertaCargando from "../utils/alertaCargando";



const promesaMostrarJuegos = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(juegos);
            reject("Error en la const promesaMostrarJuegos")
        }, 2000)
    })
}


const ItemListContainer = (props) => {
    const[arrayList, setArrayList] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        promesaMostrarJuegos()
        .then((response) => setArrayList(response))
        .catch((err) => console.error (err))
        .finally(()=> setLoading(false))
    }, [])
    console.log(arrayList)
    return(
        <div>
            <h1>Hola {props.greeting}</h1>
            <div className="grid-Items"> 
            {loading ? alertaCargando() : <ItemList juegos={arrayList} />}
                
            </div>
        </div>

    );
}
export default ItemListContainer;