"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){

    const pathname = usePathname();

    return(

        <nav className="flex  items-center justify-center bg-[#FDB608] ">
            
            <div className=" flex flex-row items-center justify-center gap-2">
                <div className="column justify-center items-center">
                    <Link href="/">
                        <Image className="p-2" alt="" width={200} height={50} src={"https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"} ></Image>
                            <div className="flex flex-row items-center justify-center gap-1">
                            <Link href={`/es`}>
                                <p className="text-white">es</p>
                            </Link>
                            <span className="text-white">|</span>
                            <Link href={`/en`}>
                                <p className="text-white">en</p>
                            </Link>
                    </div>
                </Link>
                </div>
            </div>
            


        </nav>


    )




}