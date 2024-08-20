"use client"

import { Button } from "@mui/material";
import TelaCalculadora from "./_components/telaCalculadora";

const botoesCalculadora = [
  "(",
  ")",
  "%",
  "CE",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+"
];

enum botoesCalculadora2 {
  colcheteL,
  colcheteR,
  porcentagem,
  apagar,
  sete,
  oito,
  nove,
  divisao,
  quatro,
  cinco,
  seis,
  multiplicacao,
  um,
  dois,
  tres,
  menos,
  zero,
  ponto,
  igual,
  mais,
}

export default function Home() {

  const alterarValor = () => {
    console.log("abc")
  }
  let posicao = 0

  
  const fileira = [];
  for (let iterador = 0; iterador< 5; iterador++) {
    const buttons = [];
    for (let i = 0; i< 4; i++) {
      let estilo = ""
      let css = {}
      switch (posicao) {
        case botoesCalculadora2.apagar:
          estilo = "text-white text-center bg-red-400 px-4 py-2 m-2"
          
          break
        case botoesCalculadora2.colcheteL:
        case botoesCalculadora2.colcheteR:
        case botoesCalculadora2.porcentagem:
        case botoesCalculadora2.divisao:
        case botoesCalculadora2.multiplicacao:
        case botoesCalculadora2.mais:
        case botoesCalculadora2.menos:
          css = {border: "2px solid #2196F380"}
          estilo = "text-[#2196F380] text-center bg-white px-4 py-2 m-2"
          break
        case botoesCalculadora2.igual:
          estilo = " px-4 py-2 m-2"
          break
        default:
          estilo = "text-black text-center bg-gray-400 px-4 py-2 m-2"
          break
          
      }
      buttons.push(<Button className={estilo} style={css} variant="contained" onClick={alterarValor}>{botoesCalculadora[posicao]}</Button>);
      posicao++
    }
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
