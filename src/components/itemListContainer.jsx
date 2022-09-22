import React, { useEffect, useState } from "react";
import juegos from "../utils/dataBase";
import ItemList from "./itemList";
import alertaCargando from "../utils/alertaCargando";
import { useParams } from "react-router-dom";



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
    const{ id } = useParams();

    useEffect(()=>{
        setLoading(true);
        if (id) {
            const promesaMostrarJuegoscategoriaID = () =>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve(juegos.filter(juegos => juegos.categoriaID === parseInt(id)));
                        reject("Error en la const promesaMostrarJuegoscategoriaID")
                    }, 2000)
                })
            }
            promesaMostrarJuegoscategoriaID() //No hice una funcion anonima porque intente hacer una funcion exactamente igual a promesaMostrarJuegos()pero con un filter cuando la llamaba, no sirvio pero finalmente aplicando el filter adebtri de la funcionb funciono
            .then((response) => setArrayList(response))
            .catch((err) => console.error (err))
            .finally(()=> setLoading(false))
        }else{       
            promesaMostrarJuegos()
            .then((response) => setArrayList(response))
            .catch((err) => console.error (err))
            .finally(()=> setLoading(false))}
    }, [id])
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