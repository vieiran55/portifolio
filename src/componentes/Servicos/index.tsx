import estilos from "./Servicos.module.scss";
import modelo from "../../images/10030610.png";
import siteIcon from "../../images/site.png";
import designIcon from "../../images/design.png";
import appIcon from "../../images/app.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Servicos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
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
          <div data-aos="flip-up" className={estilos.servicos__conteudo__cabecalho__desktop}>
            <h1  className={estilos.servicos__conteudo__titulo__desktop}>
              Precisa transformar sua
              <strong  className={estilos.servicos__conteudo__destaque__desktop}>
                presença online?
              </strong>
            </h1>
            <h1 className={estilos.servicos__conteudo__titulo__desktop}>Conheça nossos serviços:</h1>
          </div>
          <div className={estilos.servicos__conteudo__conteiner}>
            <div data-aos="flip-up"  className={estilos.servicos__conteudo__cabecalho}>
              <h1 className={estilos.servicos__conteudo__titulo}>
                Precisa transformar sua
                <strong className={estilos.servicos__conteudo__destaque}>
                  presença online?
                </strong>
              </h1>
              <h1>Conheça nossos serviços:</h1>
            </div>
            <div data-aos="zoom-out-right" className={estilos.servicos__conteudo__modelo__cont__desktop}>
            </div>
            <div  className={estilos.servicos__conteudo__modelo__box}>
              <div data-aos="zoom-out-right" className={estilos.servicos__conteudo__modelo__cont}>
                <img
                  src={modelo}
                  alt="modelo"
                  className={estilos.servicos__conteudo__modelo}
                />
              </div>
              <div data-aos="fade-right" className={estilos.servicos__conteudo__conteiner__cards}>
                <img
                  src={siteIcon}
                  alt=""
                  className={estilos.servicos__conteudo__conteiner__cards__icon}
                />
                <h2
                  className={
                    estilos.servicos__conteudo__conteiner__cards__titulos
                  }
                >
                  Desenvolvimento de Sites:
                </h2>
                <p>Sites personalizados que destacam sua marca</p>
              </div>
              <div data-aos="fade-up" className={estilos.servicos__conteudo__conteiner__cards}>
                <img
                  src={designIcon}
                  alt=""
                  className={estilos.servicos__conteudo__conteiner__cards__icon}
                />
                <h2
                  className={
                    estilos.servicos__conteudo__conteiner__cards__titulos
                  }
                >
                  Design:
                </h2>
                <p>Design impactante para elevar sua identidade visual.</p>
              </div>
              <div data-aos="fade-left" className={estilos.servicos__conteudo__conteiner__cards}>
                <img
                  src={appIcon}
                  alt=""
                  className={estilos.servicos__conteudo__conteiner__cards__icon}
                />
                <h2
                  className={
                    estilos.servicos__conteudo__conteiner__cards__titulos
                  }
                >
                  Desenvolvimento de Aplicativos:
                </h2>
                <p>
                  Aplicativos intuitivos que transformam ideias em experiências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
