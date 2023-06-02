import React from "react";
import EmpresasItens from "./EmpresasItens";
import estilos from "./Empresas.module.scss";
import { useInView } from "react-intersection-observer";

export default function Empresas() {
  const experiencias = [
    {
      empresa: "Empresa 1",
      cargo: "Cargo 1",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 2",
      cargo: "Cargo 2",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 3",
      cargo: "Cargo 3",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 4",
      cargo: "Cargo 4",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 5",
      cargo: "Cargo 5",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    {
      empresa: "Empresa 6",
      cargo: "Cargo 6",
      periodo: "Jan/20 - Dez/21",
      descricao: "Dero 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021 Janeiro 2020 - Dezembro 2021"
    },
    // Adicione mais objetos de experiência, se necessário
  ];

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} 
      // className={estilos.empresas}
      className={`${inView ? estilos.empresas2 : estilos.empresas}`}
    >
      <div className={estilos.empresas__titulos}>
        <h1 className={estilos.empresas__titulo}>experiências</h1>
        <h2 className={estilos.empresas__titulo2}>( )</h2>
      </div>
      <div>
        <EmpresasItens experiencias={experiencias} />
      </div>
    </div>
  );
}
