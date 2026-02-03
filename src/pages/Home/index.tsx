import { Suspense, lazy, useRef } from "react";
import estilos from "./Home.module.scss";

export default function Home() {
  const perfilRef = useRef<HTMLDivElement>(null); // Definindo o tipo de perfilRef
  const Empresas = lazy(() => import("../../componentes/Empresas"));
  const Perfil = lazy(() => import("../../componentes/Perfil"));
  const Projetos = lazy(() => import("../../componentes/Projetos"));
  const Skills = lazy(() => import("../../componentes/Skills"));
  const Sobre = lazy(() => import("../../componentes/Sobre"));
  const Servicos = lazy(() => import("../../componentes/Servicos"));
  
  return (
    <div className={estilos.home}>
      <Suspense
        fallback={
          <div className={estilos.home__loading}>
            <h1>Carregando...</h1>
          </div>
        }
      >
        <div id="perfil" className={estilos.home__perfil} ref={perfilRef}>
          <Perfil />
        </div>
        <div id="sobre" className={estilos.home__sobre}>
          <Sobre />
        </div>
        <div id="skills" className={estilos.home__skills}>
          <Skills />
        </div>
        <div id="servicos" className={estilos.home__presenca}>
          <Servicos />
        </div>
        <div id="projetos" className={estilos.home__projetos}>
          <Projetos />
        </div>
        <div className={estilos.home__empresas} id="empresas">
          <div className={estilos.home__empresas__in}>
            <Empresas />
          </div>
        </div>
      </Suspense>
    </div>
  );
}