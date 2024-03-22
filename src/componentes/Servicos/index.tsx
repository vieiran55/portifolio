import estilos from "./Servicos.module.scss";
import modelo from "../../images/10030610.png";
import siteIcon from "../../images/site.png";
import designIcon from "../../images/design.png";
import appIcon from "../../images/app.png";

export default function Servicos() {
  return (
    <div
      // className={estilos.conteiner}
      className={estilos.conteiner}
    >
      <div className={estilos.servicos}>
        <div className={estilos.servicos__titulos}>
          <div className={estilos.servicos__titulos}>
            <h1 className={estilos.servicos__titulo}>servicos</h1>
            <h2 className={estilos.servicos__titulo2}>( )</h2>
          </div>
        </div>
        <div className={estilos.servicos__conteudo}>
          <div style={{display:"none"}}>
            <img src={modelo} alt="modelo" className={estilos.servicos__modelo}/>
          </div>
          <div className={estilos.servicos__conteudo__conteiner}>
            <h1>
              Por que escolher transformar sua presença online com Antonio
              Vieira Dev?
            </h1>
            <div className={estilos.servicos__conteudo__modelo__cont}>
              <img src={modelo} alt="modelo" className={estilos.servicos__conteudo__modelo}/>
            </div>
            <div className={estilos.servicos__conteudo__conteiner__cards}>
              <img src={siteIcon} alt="" className={estilos.servicos__conteudo__conteiner__cards__icon}/>
              <h2 className={estilos.servicos__conteudo__conteiner__cards__titulos}>Desenvolvimento de Sites:</h2>
              <p>
              Sites personalizados que destacam sua marca
              </p>
            </div>
            <div className={estilos.servicos__conteudo__conteiner__cards}>
              <img src={designIcon} alt="" className={estilos.servicos__conteudo__conteiner__cards__icon}/>
              <h2 className={estilos.servicos__conteudo__conteiner__cards__titulos}>Design:</h2>
              <p>
              Design impactante para elevar sua identidade visual.
              </p>
            </div>
            <div className={estilos.servicos__conteudo__conteiner__cards}>
              <img src={appIcon} alt="" className={estilos.servicos__conteudo__conteiner__cards__icon}/>
              <h2 className={estilos.servicos__conteudo__conteiner__cards__titulos}>Desenvolvimento de Aplicativos:</h2>
              <p>
              Aplicativos intuitivos que transformam ideias em experiências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
