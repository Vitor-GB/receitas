'use client'
import Cabecalho from "@/components/Cabecalho";
import Contador from "@/components/contador";
import CardList from "@/components/CardList";
import Footer from "@/components/Rodape";
import Form from "@/components/form";
export default function Home() {
  return (
    <div>
      <Cabecalho/>
      {/* <Contador/> */}
      <CardList/>
      <Footer/>
      {/* <Form/> */}
    </div>
  );
}
