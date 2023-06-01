import { useState } from "react";
import classNames from "classnames";
import estilos from "./EmpresasItens.module.scss";

interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
}

interface Props {
  experiencias: Experiencia[];
}

export default function EmpresasItens({ experiencias }: Props) {
  const [experienciaAtiva, setExperienciaAtiva] = useState<number | null>(null);

  const toggleExperiencia = (index: number) => {
    if (experienciaAtiva === index) {
      setExperienciaAtiva(null);
    } else {
      setExperienciaAtiva(index);
    }
  };

  return (
    <div className={estilos.empresasItens}>
      <div className={estilos.linha__vertical}></div>
      <div className={estilos.experiencia__list}>
        {experiencias.map((experiencia, index) => (
          <div
            className={classNames(estilos.experiencia__item, {
              [estilos.esquerda]: index % 2 === 0,
              [estilos.direita]: index % 2 !== 0,
              [estilos.ativa]: experienciaAtiva === index
            })}
            key={index}
          >
            <div
              className={estilos.circulo}
              onClick={() => toggleExperiencia(index)}
            ></div>
            <div className={estilos.teste}>
              <div className={estilos.conteudo}>
                {experienciaAtiva === index && (
                  <>
                    <h3>{experiencia.empresa}</h3>
                    <p>{experiencia.cargo}</p>
                    <p>{experiencia.periodo}</p>
                  </>
                )}
              </div>
              <div
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
