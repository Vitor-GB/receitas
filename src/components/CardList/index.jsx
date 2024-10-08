'use client'
import Card from "../Card";
import {useState} from "../Card";


export default function CardList(){
   const [cards, setCards]= useState([
    {id:1, titulo: "Ovo com arroz e pepino", tempo: 25, serve:2},
    {id:2, titulo: "Ovo mexido",             tempo: 20, serve:2},
    {id:3, titulo: "Ovo com macarrão",       tempo: 25, serve:3},
    {id:4, titulo: "Ovo com frango frito",   tempo: 35, serve:3}
]);

    return(
        <div className ="flex flex-wrap flex-col">
           <div> Quantidade de receitas: {cards.length}</div>
          <ul>
            {cards.map(c =>{
                <li>{c.titulo} - serve{c.serve} pessoas(s)</li>
            })}
          </ul>
        </div>
    )
}