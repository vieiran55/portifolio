import estilos from "./Projetos.module.scss";
import { useState } from "react";
import dados from "../../dados/projetos.json";
import { Link } from "react-router-dom";

export default function Projetos() {
  const skillColors: { [key: string]: string } = {
    html: estilos.html,
    css: estilos.css,
    js: estilos.js,
    react: estilos.react,
    ts: estilos.ts,
    sass: estilos.sass,
    tailwind: estilos.tailwind,
    node: estilos.node,
    mongodb: estilos.mongodb,
  };

  return (
    <div
      // className={estilos.projetos}
      className={estilos.projetos}
    >
      <div className={estilos.projetos__titulos}>
        <h1 className={estilos.projetos__titulo}>projetos</h1>
        <h2 className={estilos.projetos__titulo2}>( )</h2>
      </div>

      <div className={estilos.projetos__conteiner}>
        <div className={estilos.projetos__conteiner__itens}>
          {dados.map((item, index) => (
            <div key={index} className={estilos.projetos__conteiner__itens__item}>
              <div
                className={estilos.projetos__conteiner__itens__box}
              >
                <div className={estilos.projetos__conteiner__itens__box__in}>
                  <img src={item.image} alt={item.titulo} className={estilos.projetos__conteiner__itens__box__in__img}/>
                </div>
              </div>
              <div className={estilos.projetos__conteiner__link}>
                <Link to={item.site}>VER PROJETO</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
