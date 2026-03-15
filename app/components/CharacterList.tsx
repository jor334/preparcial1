"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "./CardHP";

export default function CharacterList(){

    const { lang } = useParams();
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
        <div className="grid grid-cols-3 gap-5">
        {lstPersonajes.map((personaje: any) => (
            <Link key={personaje.id} href={`/${lang}/${personaje.id}`}>
                <Card 
                nombre={personaje.name as string}
                casa ={personaje.house as string}
                image={personaje.image as string}
                />
            </Link>
        ))}
        </div>
    )


}