import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { RxDotFilled } from "react-icons/rx";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Tooltip } from "@mui/material";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
  TbCircleNumber7,
  TbCircleNumber8,
  TbCircleNumber9,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { TbHomeHand } from "react-icons/tb";
import { useInView } from "react-intersection-observer";


export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [animaFadeDown, setAnimaFadeDown] = useState(false);
  const [animaFadeLeft, setAnimaFadeLeft] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projetos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setAnimaFadeDown(true);
    setAnimaFadeLeft(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === projetos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsLoading(false); // Desativar o indicador de carregamento
      setAnimaFadeDown(false);
      setAnimaFadeLeft(false);
    }, 200); // Tempo de espera para simular o carregamento da nova imagem
  };

  const getSlideIndex = (index: number, offset: number) => {
    const totalSlides = projetos.length;
    let slideIndex = index + offset;
    if (slideIndex < 0) {
      // Se o slideIndex for menor que zero, volta para o último slide
      slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      // Se o slideIndex for maior ou igual ao número total de slides, volta para o primeiro slide
      slideIndex = 0;
    }

    return slideIndex;
  };

  const goToSlide = (slideIndex: number | number[]) => {
    if (Array.isArray(slideIndex)) {
      // Lidar com um array de índices
      const index = slideIndex[slideIndex.length - 1];
      setCurrentIndex(index);
    } else {
      // Lidar com um único índice
      setCurrentIndex(slideIndex);
    }
  };

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

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setHover(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div ref={ref}
      // className={estilos.projetos}
      className={`${inView ? estilos.projetos2 : estilos.projetos}`}
    >
      <div className={estilos.projetos__titulos}>
        <h1 className={estilos.projetos__titulo}>projetos</h1>
        <h2 className={estilos.projetos__titulo2}>( )</h2>
      </div>

      <div className={estilos.conteiner}>
        <div className={estilos.conteinerFotos}>
          <div
            style={{
              backgroundImage: `url(${projetos[getSlideIndex(currentIndex, -1)].image
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={classNames(estilos.image, estilos.primeiro)}
          >
            <div className={estilos.projetos__item__elementos__conteiner}>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[getSlideIndex(currentIndex, -1)].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                {projetos[currentIndex].skills.map((skill, index) => (
                  <p key={index} className={estilos.projetos__item__tag__icon}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${hover ? projetos[currentIndex].hover : projetos[currentIndex].image})`,
              transition: "background-image 1s ease, transform 1s ease",
            }}
            className={classNames({
              [estilos.image]: true,
              [estilos.principal]: true,
              [estilos.anima]: animaFadeDown,
              "hover-image": hover,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={estilos.projetos__item__elementos__conteinerPrincipal}
            >
              <div className={estilos.projetos__item__tag}>
                {projetos[currentIndex].skills.map((skill, index) => (
                  <p
                    key={index}
                    className={classNames(
                      estilos.projetos__item__tag__icon,
                      skillColors[skill]
                    )}
                  >
                  </p>
                ))}
              </div>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[currentIndex].titulo}
              </h1>
            </div>
            <div className={estilos.projetos__links__conteiner}>
              <Link
                to={projetos[currentIndex].site}
                className={estilos.projetos__links__item}
              >
                <TbHomeHand className={estilos.projetos__links__item__icon} />{" "}
                Visitar
              </Link>
              <Link
                to={projetos[currentIndex].github}
                className={estilos.projetos__links__item}
              >
                <BsGithub className={estilos.projetos__links__item__icon} />
                Github
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${projetos[getSlideIndex(currentIndex, 1)].image
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={estilos.image}
          >
            <div className={estilos.projetos__item__elementos__conteiner}>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[getSlideIndex(currentIndex, 1)].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                {projetos[currentIndex].skills.map((skill, index) => (
                  <p key={index} className={estilos.projetos__item__tag__icon}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={estilos.botaoLeft}>
          <GrLinkPrevious onClick={prevSlide} />
        </div>
        <div className={estilos.botaoRight}>
          <GrLinkNext onClick={nextSlide} />
        </div>
        <div className={estilos.pontos}>
          {projetos.map((slide, slideIndex) => {
            let circleComponent = <RxDotFilled />; // Componente padrão
            if (slideIndex + 1 === currentIndex + 1) {
              // Verifica se é o índice correspondente ao currentIndex + 1
              switch (slideIndex) {
              case 0:
                circleComponent = (
                  <TbCircleNumber1 className={estilos.pontos__icons} />
                );
                break;
              case 1:
                circleComponent = (
                  <TbCircleNumber2 className={estilos.pontos__icons} />
                );
                break;
              case 2:
                circleComponent = (
                  <TbCircleNumber3 className={estilos.pontos__icons} />
                );
                break;
              case 3:
                circleComponent = (
                  <TbCircleNumber4 className={estilos.pontos__icons} />
                );
                break;
              case 4:
                circleComponent = (
                  <TbCircleNumber5 className={estilos.pontos__icons} />
                );
                break;
              case 5:
                circleComponent = (
                  <TbCircleNumber6 className={estilos.pontos__icons} />
                );
                break;
              case 6:
                circleComponent = (
                  <TbCircleNumber7 className={estilos.pontos__icons} />
                );
                break;
              case 7:
                circleComponent = (
                  <TbCircleNumber8 className={estilos.pontos__icons} />
                );
                break;
              case 8:
                circleComponent = (
                  <TbCircleNumber9 className={estilos.pontos__icons} />
                );
                break;
              default:
                break;
              }
            }

            return (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={estilos.pontos__pontos}
              >
                {circleComponent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
