import estilos from "./Skills.module.scss";
import css3 from "../../images/skills/css3.svg";
import html5 from "../../images/skills/html5.svg";
import javascript from "../../images/skills/javascript.svg";
import mongodb from "../../images/skills/mongodb.svg";
import mysql from "../../images/skills/mysql.svg";
import sqlite from "../../images/skills/sqlite.svg";
import nodejs from "../../images/skills/nodejs.svg";
import python from "../../images/skills/python.svg";
import react from "../../images/skills/react.svg";
import sass from "../../images/skills/sass.svg";
import tailwindcss from "../../images/skills/tailwindcss.svg";
import typescript from "../../images/skills/typescript.svg";
import csharp from "../../images/skills/csharp-original.svg";
import dotnet from "../../images/skills/dot-net-original.svg";
import dotnetcore from "../../images/skills/dotnetcore-original.svg";
import linux from "../../images/skills/linux-original.svg";
import next from "../../images/skills/nextjs-original.svg";
import postgres from "../../images/skills/postgresql-original.svg";
import vuejs from "../../images/skills/vuejs-original.svg";
import docker from "../../images/skills/docker.svg";

import java from "../../images/skills/java.svg";
import spring from "../../images/skills/spring.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
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
      <div className={estilos.skills__titulosConteiner}>
        <div className={estilos.skills__titulos}>
          <h1 className={estilos.skills__titulo}>skills</h1>
          <h2 className={estilos.skills__titulo2}>( )</h2>
        </div>
        <div></div>
        <div data-aos="zoom-in" className={estilos.skills}>
          <img src={java} alt="java" className={estilos.skills__icons} />
          <img src={spring} alt="spring" className={estilos.skills__icons} />

          <img
            src={typescript}
            alt="typescript"
            className={estilos.skills__icons}
          />
          <img
            src={javascript}
            alt="javascript"
            className={estilos.skills__icons}
          />
          <img src={react} alt="react" className={estilos.skills__icons} />
          <img src={next} alt="mysql" className={estilos.skills__icons} />

          <img src={html5} alt="html5" className={estilos.skills__icons} />
          <img src={css3} alt="css3" className={estilos.skills__icons} />

          <img
            src={tailwindcss}
            alt="tailwindcss"
            className={estilos.skills__icons}
          />

          <img src={mongodb} alt="mongodb" className={estilos.skills__icons} />
          <img src={mysql} alt="mysql" className={estilos.skills__icons} />
          <img
            src={postgres}
            alt="postgres"
            className={estilos.skills__icons}
          />

          <img src={linux} alt="myslinuxl" className={estilos.skills__icons} />
          <img src={docker} alt="docker" className={estilos.skills__icons} />
        </div>
      </div>
    </div>
  );
}
