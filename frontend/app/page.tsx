"use client"

import { Button } from "@mui/material";
import Image from "next/image";
import TelaCalculadora from "./_components/telaCalculadora";

export default function Home() {

  const alterarValor = () => {
    console.log("abc")
  }
  const buttons = [];
  for (let i = 0; i< 4; i++) {
    buttons.push(<Button className ="m-1 text-black text-center bg-gray-400 px-4 py-2 m-2"variant="contained" onClick={alterarValor}>button {i + 1}</Button>);
  }


  const fileira = [];
  for (let iterador = 0; iterador< 5; iterador++) {
    fileira.push(<div className="flex">{buttons}</div>)
  }
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <div className="flex flex-col">
        <div className='justify-content: center bg-slate-950 h-2/6 p-5 rounded-t-2xl border-2 border-slate-200'>
          <TelaCalculadora></TelaCalculadora>
        </div>
        <div className="bg-white h-2/6 p-5 border-2 border-slate-200 rounded-b-2xl">
          {fileira}
        </div>
      </div> 
    </main>
  );
}
