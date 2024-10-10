'use client'
import Card from "../Card";
import {useState} from "react";


export default function CardList(){
   const [cards, setCards]= useState([
    {id:1, titulo: "Ovo com arroz e pepino", imagem: "ovo-com-pepino.png", tempo: 25, serve:2},
    {id:2, titulo: "Ovo mexido",             imagem: "pexels-alesia-kozik-6544488 1.png", tempo: 20, serve:2},
    {id:3, titulo: "Ovo com macarrão",       imagem: "pexels-mikhail-nilov-6958019 1.png", tempo: 25, serve:3},
    {id:4, titulo: "Ovo com frango frito",   imagem: "pexels-rodnae-productions-6646358 1.png", tempo: 35, serve:3}
]);

    return(
        <div className ="flex flex-wrap flex-col">
           <div> Quantidade de receitas: {cards.length}</div>
          <div className="flex flex-wrap">
                {cards.map(c =>(
                    <Card
                    key    = {c.id}
                    imagem = {c.imagem}
                    titulo = {c.titulo}
                    tempo =  {c.tempo}
                    serve =  {c.tempo}
                    />
                ))}
          </div>
        </div>
    )
}