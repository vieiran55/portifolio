import { Link } from "react-router-dom";
import estilos from "./Sobre.module.scss";

export default function Sobre() {
  return (
    <div className={estilos.sobre}>
      <div className={estilos.sobre__infos}>
        <div className={estilos.sobre__infos__titulos}>
          <h1 className={estilos.sobre__infos__titulo}>sobreMim</h1>
          <h2 className={estilos.sobre__infos__titulo2}>( )</h2>
        </div>
        <p className={estilos.sobre__infos__texto}>
          Eu vou fazer seu tempo valer a pena O tempo que você perdeu vivendo
          aquela cena Abri um salão pra você dentro da minha favela Tudo que é
          meu, tu pode ver, tá na responsa dela E todo mundo tá ligado que ela é
          minha de fé Ai de quem cometeu pecado, cobiçar minha mulher Só ela
          caminhou comigo quando eu tava a pé Só ela sobe na garupa da XRE, e-eu
          dou tudo que ela quer Parece até uma modelo Mandei colocar 500 ml no
          seu peito, a preta do lado do preto Que ficava comigo no beco, hoje
          nós tá contando dinheiro De marola no Rio de Janeiro, o real casal do
          gueto
        </p>
      </div>
      <div className={estilos.sobre__cards}>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Desenvolvedor Fullstack Jr.
            </h1>
            <Link to={"/"} className={estilos.sobre__cards__link}>
              Projects
            </Link>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"</>"}</h1>
        </div>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Desenvolvedor Fullstack Jr.
            </h1>
            <Link to={"/"} className={estilos.sobre__cards__link}>
              Entre em contato comigo!
            </Link>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"{ }"}</h1>
        </div>
      </div>
    </div>
  );
}
