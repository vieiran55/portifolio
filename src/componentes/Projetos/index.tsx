import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { RxDotFilled } from "react-icons/rx";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Tooltip } from "@mui/material";

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projetos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setIsLoading(true); // Ativar o indicador de carregamento
    setTimeout(() => {
      const isLastSlide = currentIndex === projetos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsLoading(false); // Desativar o indicador de carregamento
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

  const valuetext = (value: number) => {
    return `${value + 1}`;
  };

  useEffect(() => {
    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      if (image.classList.contains("fade-out")) {
        image.classList.remove("fade-out");
      }
      if (image.classList.contains("fade-in")) {
        image.classList.remove("fade-in");
      }
      const dataIndex = image.getAttribute("data-index");
      if (dataIndex === String(currentIndex)) {
        image.classList.add("fade-in");
      } else {
        image.classList.add("fade-out");
      }
    });
  }, [currentIndex]);

  const handleMouseOver = (event: React.MouseEvent<HTMLSpanElement>) => {
    const value = Number(event.currentTarget.getAttribute("aria-valuenow"));
    event.currentTarget.setAttribute("aria-valuetext", `${value + 1}`);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.currentTarget.removeAttribute("aria-valuetext");
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
              backgroundImage: `url(${
                projetos[getSlideIndex(currentIndex, -1)].url
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
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
              backgroundImage: `url(${projetos[currentIndex].url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className={(estilos.image, estilos.principal)}
          >
            <div
              className={estilos.projetos__item__elementos__conteinerPrincipal}
            >
              <h1 className={estilos.projetos__item__titulo}>
                {projetos[currentIndex].titulo}
              </h1>
              <div className={estilos.projetos__item__tag}>
                {projetos[currentIndex].skills.map((skill, index) => (
                  <p
                    key={index}
                    className={estilos.projetos__item__tag__iconPrincipal}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${
                projetos[getSlideIndex(currentIndex, 1)].url
              })`,
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
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        <div className={estilos.botaoRight}>
          <BsChevronCompactRight onClick={nextSlide} />
        </div>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Navegação"
            defaultValue={currentIndex}
            onChange={(_, value) => goToSlide(value)}
            valueLabelDisplay="off" // Mostrar o valor ao passar o mouse
            step={1}
            value={currentIndex}
            marks
            min={0}
            max={projetos.length - 1}
            getAriaValueText={valuetext}
            sx={{ color: "#70FF00" }}
          />
          <Tooltip title={`Value: ${currentIndex + 1}`} placement="top" arrow>
            <div
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              style={{ display: "none" }}
              tabIndex={-1}
              aria-hidden="true"
              data-value=""
            />
          </Tooltip>
        </Box>
      </div>
    </div>
  );
}
