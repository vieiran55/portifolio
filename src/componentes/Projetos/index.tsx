import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames";

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projetos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projetos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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

  return (
    <div className={estilos.projetos}>
      <div className={estilos.projetos__titulos}>
        <h1 className={estilos.projetos__titulo}>projetos</h1>
        <h2 className={estilos.projetos__titulo2}>( )</h2>
      </div>

      <div className={estilos.conteiner}>
        <div className={estilos.conteinerFotos}>
          <div
            style={{
              backgroundImage: `url(${projetos[getSlideIndex(currentIndex, -1)].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className={classNames(estilos.image, estilos.teste)}
          >
            <div className={estilos.projetos__item__elementos__conteiner}>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[getSlideIndex(currentIndex, -1)].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                <p className={estilos.projetos__item__tag__icon}>react</p>
                <p className={estilos.projetos__item__tag__icon}>ts</p>
                <p className={estilos.projetos__item__tag__icon}>sass</p>
                <p className={estilos.projetos__item__tag__icon}>tailwind</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${projetos[currentIndex].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className={estilos.image}
          >
            <div className={estilos.projetos__item__elementos__conteiner}>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[currentIndex].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                <p className={estilos.projetos__item__tag__icon}>react</p>
                <p className={estilos.projetos__item__tag__icon}>ts</p>
                <p className={estilos.projetos__item__tag__icon}>sass</p>
                <p className={estilos.projetos__item__tag__icon}>tailwind</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${projetos[getSlideIndex(currentIndex, 1)].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className={estilos.image}
          >
            <div className={estilos.projetos__item__elementos__conteiner}>
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[getSlideIndex(currentIndex, 1)].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                <p className={estilos.projetos__item__tag__icon}>react</p>
                <p className={estilos.projetos__item__tag__icon}>ts</p>
                <p className={estilos.projetos__item__tag__icon}>sass</p>
                <p className={estilos.projetos__item__tag__icon}>tailwind</p>
              </div>
            </div>
          </div>
        </div>
        <div className={estilos.botaoLeft}>
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        <div className={estilos.botaoRight}>
          <BsChevronCompactRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}
