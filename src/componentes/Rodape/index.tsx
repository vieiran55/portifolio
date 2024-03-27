import { Link } from "react-router-dom";
import estilos from "./Rodape.module.scss";
import logo from "../../images/logoCvtrsy.png";
import { Link as ScrollLink } from "react-scroll";
import { GiChemicalArrow } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.rodape__coteiner}>
        <div className={estilos.rodape__logo}>
          <Link
            to="https://linktr.ee/vieiran55"
            className={estilos.rodape__coteiner__texto}
          >
            <img className={estilos.logo} src={logo}></img>
          </Link>
        </div>
        <div className={estilos.rodape__links}>
          <ol className={estilos.rodape__opcoes}>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="perfil"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Perfil
              </ScrollLink>
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="sobre"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Sobre
              </ScrollLink>
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="skills"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Skills
              </ScrollLink>
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="servicos"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Serviços
              </ScrollLink>
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="projetos"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Projetos
              </ScrollLink>
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <GiChemicalArrow
                className={estilos.rodape__opcoes__links__iconsArrow}
              />
              <ScrollLink
                to="empresas"
                smooth={true}
                duration={1000}
                offset={-200} // Ajuste o valor do deslocamento conforme necessário
              >
                Experiências
              </ScrollLink>
            </li>
          </ol>
        </div>
        <div className={estilos.rodape__links}>
          <ol className={estilos.rodape__opcoes}>
            <li className={estilos.rodape__opcoes__links}>
              <FaWhatsapp className={estilos.rodape__opcoes__links__icons} />
              (61) 99998-1928
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <AiOutlineMail className={estilos.rodape__opcoes__links__icons} />
              vieira.n55@gmail.com
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <CiStar className={estilos.rodape__opcoes__links__icons} />
              Avalie
            </li>
            <li className={estilos.rodape__opcoes__links}>
              <CiLocationOn className={estilos.rodape__opcoes__links__icons} />
              Brasília - DF
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h1>© Copyright 2024 | Todos os direitos reservados</h1>
      </div>
    </footer>
  );
}
