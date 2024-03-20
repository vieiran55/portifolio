import React from "react";
import EmpresasItens from "./EmpresasItens";
import estilos from "./Empresas.module.scss";
import { useInView } from "react-intersection-observer";
import experiencias from "../../dados/empresas.json";

export default function Empresas() {
  

  return (
    <div 
      // className={estilos.empresas}
      className={estilos.empresas}
    >
      <div className={estilos.empresas__titulos}>
        <h1 className={estilos.empresas__titulo}>experiências</h1>
        <h2 className={estilos.empresas__titulo2}>( )</h2>
      </div>
      <div className={estilos.empresas__conteiner}>
        <EmpresasItens experiencias={experiencias} />
      </div>
    </div>
  );
}
