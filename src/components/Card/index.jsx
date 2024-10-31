'use client'
import { Soup, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({id,imagem, titulo, tempo, serve }){
    return(
        <div
            className="m-4 rounded border-2 border-rose-400">
                <Link href={`/receitas/${id}`}>
            <Image
                src={imagem}
                width="387"
                height="297"
                alt="Prato de ovo com pepino"/>
            <h2 
            className="p-2 bg-rose-400 text-white"
            >{titulo}</h2>
            <div className="p-2 text-xs flex items-center gap-1">
                <Timer/> {tempo} minuto(s)
            </div>
            <div className="p-2 text-xs flex items-center gap-1">
                <Soup/>serve {serve} pessoa(s)
            </div>
            </Link>
        </div>
    )
}   