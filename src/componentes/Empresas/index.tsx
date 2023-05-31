import React from "react";
import EmpresasItens from "./EmpresasItens";
import estilos from "./Empresas.module.scss";

export default function Empresas() {
  const experiencias = [
    {
      empresa: "Empresa 1",
      cargo: "Cargo 1",
      periodo: "Janeiro 2020 - Dezembro 2021",
    },
    {
      empresa: "Empresa 2",
      cargo: "Cargo 2",
      periodo: "Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020Fevereiro 2019 - Maio 2020Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020 Fevereiro 2019 - Maio 2020",
    },
    {
      empresa: "Empresa 3",
      cargo: "Cargo 3",
      periodo: "Fevereiro 2019 - Maio 2020",
    },
    {
      empresa: "Empresa 4",
      cargo: "Cargo 4",
      periodo: "Fevereiro 2019 - Maio 2020",
    },
    // Adicione mais objetos de experiência, se necessário
  ];

  return (
    <div className={estilos.empresas}>
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
