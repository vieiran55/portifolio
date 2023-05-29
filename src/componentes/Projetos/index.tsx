import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import modelo from "../../images/modelo.png";
import { Slide } from "react-slideshow-image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

export default function Projetos() {
  const slides = [
    {
      url: "https://apiboficial.org/files/2022/04/photo5087269577225775648-1-1080x675.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1682685795463-0674c065f315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1685314627216-600b891897ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1683480677417-ca36ced387a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    },
    {
      url: "/images/modelo.png",
    },
    {
      url: "/images/modelo2.png",
    },
    {
      url: "/images/modelo3.png",
    },
  ];

  const proo = [
    {
      url: "https://apiboficial.org/files/2022/04/photo5087269577225775648-1-1080x675.jpg",
      titulo: "projeto 1",
    },
    {
      url: "https://images.unsplash.com/photo-1682685795463-0674c065f315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
      titulo: "projeto 2",
    },
    {
      url: "https://images.unsplash.com/photo-1685314627216-600b891897ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      titulo: "projeto 3",
    },
    {
      url: "https://images.unsplash.com/photo-1683480677417-ca36ced387a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      titulo: "projeto 4",
    },
    {
      url: "/images/modelo.png",
      titulo: "projeto 5",
    },
    {
      url: "/images/modelo2.png",
      titulo: "projeto 6",
    },
    {
      url: "/images/modelo3.png",
      titulo: "projeto 7",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={estilos.projetos}>
      <div className={estilos.projetos__titulos}>
        <h1 className={estilos.projetos__titulo}>projetos</h1>
        <h2 className={estilos.projetos__titulo2}>( )</h2>
      </div>

      <div className={estilos.conteiner}>
        <div
          style={{
            backgroundImage: `url(${proo[currentIndex].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className={estilos.image}
        ></div>
        <div className={estilos.projetos__item__elementos__conteiner}>
          <h1 className={estilos.projetos__item__titulo}>
            {proo[currentIndex].titulo}
          </h1>
          <div className={estilos.projetos__item__tag}>
            <p className={estilos.projetos__item__tag__icon}>react</p>
            <p className={estilos.projetos__item__tag__icon}>ts</p>
            <p className={estilos.projetos__item__tag__icon}>sass</p>
            <p className={estilos.projetos__item__tag__icon}>tailwind</p>
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

  // // funcionando o slider

  // <div className={estilos.conteiner}>
  //   <h1>projeto</h1>
  //   <div
  //     style={{
  //       backgroundImage: `url(${slides[currentIndex].url})`,
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "contain",
  //       backgroundPosition: "center",
  //     }}
  //     className={estilos.image}
  //   ></div>
  //   <div className={estilos.botaoLeft}>
  //     <BsChevronCompactLeft onClick={prevSlide} />
  //   </div>
  //   <div className={estilos.botaoRight}>
  //     <BsChevronCompactRight onClick={nextSlide} />
  //   </div>
  //   <div className={estilos.pontos}>
  //     {slides.map((slide, slideIndex) => (
  //       <div
  //         key={slideIndex}
  //         onClick={() => goToSlide(slideIndex)}
  //         className={estilos.pontos__pontos}
  //       >
  //         <RxDotFilled />
  //       </div>
  //     ))}
  //   </div>
  // </div>
  );
}
