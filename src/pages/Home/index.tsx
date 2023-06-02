import { useEffect, useState } from "react";
import Empresas from "../../componentes/Empresas";
import Perfil from "../../componentes/Perfil";
import Projetos from "../../componentes/Projetos";
import Skills from "../../componentes/Skills";
import Sobre from "../../componentes/Sobre";
import estilos from "./Home.module.scss";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <div className={estilos.home}>
      <Perfil />
      <Sobre />
      <Skills />
      <Projetos />
      <Empresas />
    </div>
  );
}
