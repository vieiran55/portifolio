import Perfil from "../../componentes/Perfil";
import Projetos from "../../componentes/Projetos";
import Skills from "../../componentes/Skills";
import Sobre from "../../componentes/Sobre";
import estilos from "./Home.module.scss";

export default function Home(){
  return(
    <div className={estilos.home}>
      <Perfil />
      <Sobre />
      <Skills />
      <Projetos />
    </div>
  );
}