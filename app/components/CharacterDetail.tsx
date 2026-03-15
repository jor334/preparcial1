'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

interface Dict {
    house: string;
    gender: string;
    wand: string;
    wood: string;
    length: string;
}

interface CharacterDetailProps {
    id: string;
    dict: Dict;
}

const BorderColorHouses: Record<string, string> = {
    Gryffindor: 'border-[#740001]',
    Slytherin: 'border-[#1A472A]',
    Ravenclaw: 'border-[#0E1A40]',
    Hufflepuff: 'border-[#FFD800]',
}

export default function CharacterDetail({ id, dict }: CharacterDetailProps) {

    const [personaje, setPersonaje] = useState<any>(null);

    useEffect(() => {
        async function llamarApi() {
            const respuesta = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
            const datos = await respuesta.json();
            setPersonaje(datos[0]);
        }
        llamarApi();
    }, [id]);

    const colorBorde = BorderColorHouses[personaje?.house] ?? 'border-[#D1D5DB]';

    return (
        <div className="flex flex-col items-center bg-white">

            <h1 className="text-2xl font-bold mt-10 text-amber-400 mb-4">{personaje?.name}</h1>

            <div className={`flex flex-row rounded-xl border-2 ${colorBorde} m-10 bg-white`}>

                <div className="flex flex-col justify-center p-8 gap-2">
                    <p className="text-gray-800"><span className="text-black font-bold">{dict.house}:</span> {personaje?.house}</p>
                    <p className="text-gray-800"><span className="text-black font-bold">{dict.gender}:</span> {personaje?.gender}</p>
                    <p className="text-gray-800"><span className="text-black font-bold">{dict.wand}:</span> {personaje?.wand?.core}</p>
                    <p className="text-gray-800"><span className="text-black font-bold">{dict.wood}:</span> {personaje?.wand?.wood}</p>
                    <p className="text-gray-800"><span className="text-black font-bold">{dict.length}:</span> {personaje?.wand?.length}</p>
                </div>

                <div className="relative w-64 h-80">
                    <Image fill className="object-cover" src={personaje?.image ?? ""} alt={personaje?.name ?? ""} />
                </div>

            </div>
        </div>
    );
}
