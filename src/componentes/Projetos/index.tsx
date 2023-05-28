import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import modelo from "../../images/modelo.png";
import { Slide } from "react-slideshow-image";

export default function Projetos() {

  return (
    <div className={estilos.projetos}>
      <div className={estilos.projetos__titulos}>
        <h1 className={estilos.projetos__titulo}>projetos</h1>
        <h2 className={estilos.projetos__titulo2}>( )</h2>
      </div>
      <div className={estilos.projetos__item}>
        <img src={modelo} alt="" className={estilos.projetos__item__imagem} />
        <div className={estilos.projetos__item__elementos__conteiner}>
          <h1 className={estilos.projetos__item__titulo}>
            Projeto 1
          </h1>
          <div className={estilos.projetos__item__tag}>
            <p className={estilos.projetos__item__tag__icon}>react</p>
            <p className={estilos.projetos__item__tag__icon}>ts</p>
            <p className={estilos.projetos__item__tag__icon}>sass</p>
            <p className={estilos.projetos__item__tag__icon}>tailwind</p>
          </div>
        </div>
      </div>
      <div className={estilos.projetos__item}>
        <img src={modelo} alt="" className={estilos.projetos__item__imagem} />
        <div className={estilos.projetos__item__elementos__conteiner}>
          <h1 className={estilos.projetos__item__titulo}>
            Projeto 2
          </h1>
          <div className={estilos.projetos__item__tag}>
            <p className={estilos.projetos__item__tag__icon}>react</p>
            <p className={estilos.projetos__item__tag__icon}>ts</p>
            <p className={estilos.projetos__item__tag__icon}>sass</p>
            <p className={estilos.projetos__item__tag__icon}>tailwind</p>
            <p className={estilos.projetos__item__tag__icon}>nodejs</p>
          </div>
        </div>
      </div>
    </div>
  );
}