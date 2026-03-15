import Image from "next/image";


//Colores del Background para Tailwind
const BgColorHouses = {
  Gryffindor: 'bg-[#740001]',
  Slytherin: 'bg-[#1A472A]',
  Ravenclaw: 'bg-[#0E1A40]',
  Hufflepuff: 'bg-[#FFD800]',
  NoHouse: 'bg-[#D1D5DB]',
  }


interface CardProps {
  id?: string;
  nombre?: string;
  casa?: string;
  image?: string;
}

export default function Card({ nombre, casa, image, }: CardProps) {

  
  let colorCasa = BgColorHouses.NoHouse;
  if (casa === "Gryffindor") {
    colorCasa = BgColorHouses.Gryffindor;
  } else if (casa === "Slytherin") {
    colorCasa = BgColorHouses.Slytherin;
  } else if (casa === "Ravenclaw") {
    colorCasa = BgColorHouses.Ravenclaw;
  } else if (casa === "Hufflepuff") {
    colorCasa = BgColorHouses.Hufflepuff;
  }

  return (
    <div className={`rounded-xl flex flex-col items-center ${colorCasa} mb-5 mr-10 ml-10`}>
        <h1 className="text-white  mt-2 mb-2">{nombre}</h1>
        <div className="relative w-80 h-120">
          <Image fill className="" src={image ?? ""} alt="" />
        </div>
    </div>
  );
}