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
  return (
    <div className={estilos.empresasItens}>
      <div className={estilos.linha__vertical}></div>
      <div className={estilos.experiencia__list}>
        {experiencias.map((experiencia, index) => (
          <div
            className={`${estilos.experiencia__item} ${
              index % 2 === 0 ? estilos.esquerda : estilos.direita
            }`}
            key={index}
          >
            <div className={estilos.circulo}></div>
            <div className={estilos.conteudo}>
              <h3>{experiencia.empresa}</h3>
              <p>{experiencia.cargo}</p>
              <p>{experiencia.periodo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
