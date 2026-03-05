"use client";

import { useEffect, useState } from "react";
import Card from "./CardHP";

export default function CharacterList(){

    const [lstPersonajes, setLstPersonajes] = useState([])


    useEffect(()=> {

        async function llamarApi(){
            const respuesta = await fetch("https://hp-api.onrender.com/api/characters")
            const datos = await respuesta.json()

            setLstPersonajes(datos.slice(0, 12)) 
        }

        llamarApi()

    }, [])

    return(

        <div className=" columns-3">
        {lstPersonajes.map((personaje) => (
            <Card 
            key={personaje.id}
            nombre={personaje.name}
            casa ={personaje.casa}
            image={personaje.image}
            />
        ))}
        </div>
    )


}