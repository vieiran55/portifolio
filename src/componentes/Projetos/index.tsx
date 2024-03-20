import estilos from "./Projetos.module.scss";
import projetos from "../../dados/projetos.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { HiMoon } from "react-icons/hi";
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
import { HiSun } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [animaFadeDown, setAnimaFadeDown] = useState(false);
  const [animaFadeLeft, setAnimaFadeLeft] = useState(false);


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

      <div className={estilos.conteiner}>
        Aqui serão inseridos os projetos
      </div>
    </div>
  );
}
