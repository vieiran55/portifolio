import Perfil from "../../componentes/Perfil";
import Sobre from "../../componentes/Sobre";
import estilos from "./Home.module.scss";

export default function Home(){
  return(
    <div className={estilos.home}>
      <Perfil />
      <Sobre />
    </div>
  );
}