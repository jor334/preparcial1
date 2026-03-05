import Image from "next/image";

interface CardProps {
  id?: string;
  nombre?: string;
  casa?: string;
  image?: string;
}

export default function Card({ nombre, casa, image, }: CardProps) {
  return (
    <div className="flex flex-col items-center  bg-amber-900 m-5">
        <h1 className="mb-2">{nombre}</h1>
        <p>{casa}</p>
        <Image width={200} height={200} src={image} alt=""></Image>
    </div>
  );
}