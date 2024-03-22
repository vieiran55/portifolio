import estilos from "./Perfil.module.scss";
import avatar from "../../images/antonio.png";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

export default function Perfil() {
  return (
    <div className={estilos.perfil}>
      <div className={estilos.perfil__conteiner__avatar}>
        <img
          className={estilos.perfil__avatar}
          src={avatar}
          alt="Minha caracteristicas fisicas"
        />
      </div>
      <div className={estilos.perfil__titulos}>
        <h3 className={estilos.perfil__titulos__ola}>Olá, eu sou</h3>
        <h1 className={estilos.perfil__titulos__nome}>
          
          {"< Antonio Vieira />"}
        </h1>
        <div className={estilos.perfil__titulos__prof}>
          <h2 className={estilos.perfil__titulos__prof__dev}>
            Desenvolvedor{" "}
          </h2>
          <Typewriter
            options={{
              strings: ["Font End", "Back End", "Full Stack"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
