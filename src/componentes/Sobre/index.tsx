import { Link } from "react-router-dom";
import estilos from "./Sobre.module.scss";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

export default function Sobre() {

  const wpp = "https://wa.me/5561999981928";


  return (
    <div 
      // className={estilos.sobre}
      className={estilos.sobre}
    >
      <div className={estilos.sobre__infos}>
        <div className={estilos.sobre__infos__titulos}>
          <h1 className={estilos.sobre__infos__titulo}>sobreMim</h1>
          <h2 className={estilos.sobre__infos__titulo2}>( )</h2>
        </div>
        <div>
          <p className={estilos.sobre__infos__texto}>
          Olá, sou Antonio, um profissional de Tecnologia da Informação com mais de 10 anos de experiência. Ao longo da minha carreira, concentrei-me em Infraestrutura e Suporte Técnico, e desde 2022, tenho dedicado meu tempo à transição e especialização como Desenvolvedor de Software.
          </p>
          <p className={estilos.sobre__infos__texto}>
          Possuo formação em Análise e Desenvolvimento de Sistemas, complementada por participação em programas profissionalizantes de renome, como AceleraDevs, Oracle Next Education e Desenvolvedor FullStack pelo Senai.
          </p>
          <p className={estilos.sobre__infos__texto}>
          Minhas habilidades abrangem uma ampla gama de linguagens de programação, incluindo JavaScript, TypeScript, NodeJS, C#, e domino frameworks como React, Next, Vue, NestJs, Express e Asp .Net Core. Além disso, tenho experiência sólida no uso de bancos de dados relacionais, como MySQL e PostgreSQL, bem como bancos de dados NoSQL, como MongoDB.
          </p>
          <p className={estilos.sobre__infos__texto}>
          Estou comprometido com o aprendizado contínuo e o aprimoramento das minhas habilidades técnicas, sempre buscando oportunidades para contribuir de forma significativa em projetos desafiadores e dinâmicos na área de desenvolvimento de software.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Além das minhas habilidades técnicas, estou em constante aprimoramento do meu inglês por meio de estudos regulares. Acredito que a fluência no idioma é um diferencial importante para acompanhar as tendências globais da área de desenvolvimento de software e colaborar em projetos internacionais.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Se você está procurando um desenvolvedor dedicado, apaixonado por tecnologia, com experiência em Linux e um histórico sólido em TI, estou ansioso para conectar e contribuir para o sucesso da sua equipe.
          </p>
        </div>
      </div>
      <div className={estilos.sobre__cards}>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Desenvolvedor Fullstack Jr.
            </h1>
            <ScrollLink to={"projetos"} className={estilos.sobre__cards__link}>
              Projetos
            </ScrollLink>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"</>"}</h1>
        </div>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Freelancer
            </h1>
            <Link to={wpp} className={estilos.sobre__cards__link}>
              Entre em contato comigo!
            </Link>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"{}"}</h1>
        </div>
      </div>
    </div>
  );
}
