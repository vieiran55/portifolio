import { useEffect, useState, useRef } from "react";
import Empresas from "../../componentes/Empresas";
import Perfil from "../../componentes/Perfil";
import Projetos from "../../componentes/Projetos";
import Skills from "../../componentes/Skills";
import Sobre from "../../componentes/Sobre";
import estilos from "./Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Outlet } from "react-router-dom";
import Servicos from "../../componentes/Servicos";

export default function Home() {
  const perfilRef = useRef<HTMLDivElement>(null); // Definindo o tipo de perfilRef

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (perfilRef.current) { // Verificando se perfilRef.current não é nulo
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = perfilRef.current;

        const mouseX = clientX - offsetWidth / 2;
        const mouseY = clientY - offsetHeight / 2;

        const translateX = (mouseX / offsetWidth) * 30; // Ajuste a sensibilidade do movimento horizontal
        const translateY = (mouseY / offsetHeight) * 30; // Ajuste a sensibilidade do movimento vertical

        // Definindo o background-position diretamente no elemento
        perfilRef.current.style.backgroundPosition = `${translateX}px ${translateY}px`;
      }
    };

    if (perfilRef.current) { // Verificando se perfilRef.current não é nulo
      perfilRef.current.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (perfilRef.current) { // Verificando se perfilRef.current não é nulo
        perfilRef.current.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, []);

  return (
    <div className={estilos.home}>
      <div id="perfil" className={estilos.home__perfil} ref={perfilRef}>
        <Perfil />
      </div>
      <div id="sobre" className={estilos.home__sobre}>
        <Sobre />
      </div>
      <div id="skills" className={estilos.home__skills}>
        <Skills />
      </div>
      <div  id="skills" className={estilos.home__presenca}>
        <Servicos />
      </div>
      <div id="projetos" className={estilos.home__projetos}>
        <Projetos />
      </div>
      <div className={estilos.home__empresas} id="empresas">
        <Empresas />
      </div>
    </div>
  );
}
