"use client";

import { Button } from "@mui/material";
import TelaCalculadora from "./_components/telaCalculadora";
import { useState } from 'react';

export default function Home() {
  const [valorTela, setvalorTela] = useState("");

  function incrementarValor(valor: string) {
    if (valor === "CE") {
      setvalorTela("");
    } else if (valor === "=") {
      try {
        setvalorTela(eval(valorTela));
      } catch {
        setvalorTela("Erro");
      }
    } else {
      setvalorTela(prev => prev + valor);
    }
  }

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

  let posicao = 0;

  const fileira = [];
  for (let iterador = 0; iterador < 5; iterador++) {
    const buttons = [];
    for (let i = 0; i < 4; i++) {
      if (posicao >= botoesCalculadora.length) break; // Evitar acessar fora dos limites

      let estilo = "";
      let css = {};
      switch (posicao) {
        case botoesCalculadora2.apagar:
          estilo = "text-white text-center bg-red-400 hover:bg-red-600 px-4 py-2 m-2";
          break;
        case botoesCalculadora2.colcheteL:
        case botoesCalculadora2.colcheteR:
        case botoesCalculadora2.porcentagem:
        case botoesCalculadora2.divisao:
        case botoesCalculadora2.multiplicacao:
        case botoesCalculadora2.mais:
        case botoesCalculadora2.menos:
          css = { border: "2px solid #2196F380" };
          estilo = "font-extrabold text-[#2196F380] text-center bg-white hover:bg-sky-100 px-4 py-2 m-2";
          break;
        case botoesCalculadora2.igual:
          estilo = "hover:bg-white hover:text-black u px-4 py-2 m-2";
          break;
        default:
          estilo = "font-bold text-black text-center bg-gray-400 hover:bg-gray-600 px-4 py-2 m-2";
          break;
      }
      buttons.push(
        <Button
          key={posicao}
          className={estilo}
          style={css}
          variant="contained"
          onClick={() => incrementarValor(botoesCalculadora[posicao])}
        >
          {botoesCalculadora[posicao]}
        </Button>
      );
      posicao++;
    }
    fileira.push(<div key={iterador} className="flex">{buttons}</div>);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col">
        <div className="bg-slate-950 h-2/6 p-5 rounded-t-2xl border-2 border-slate-200">
          <TelaCalculadora valorTela={valorTela} />
        </div>
        <div className="bg-white h-2/6 p-5 border-2 border-slate-200 rounded-b-2xl">
          {fileira}
        </div>
      </div>
    </main>
  );
}