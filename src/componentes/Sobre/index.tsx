import { Link } from "react-router-dom";
import estilos from "./Sobre.module.scss";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Sobre() {
  const wpp = "https://wa.me/5561999981928";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      // className={estilos.sobre}
      className={estilos.sobre}
    >
      <div data-aos="fade-down" className={estilos.sobre__infos}>
        <div className={estilos.sobre__infos__titulos}>
          <h1 className={estilos.sobre__infos__titulo}>sobreMim</h1>
          <h2 className={estilos.sobre__infos__titulo2}>( )</h2>
        </div>
        <div>
          <p className={estilos.sobre__infos__texto}>
            Olá, sou Antônio, Desenvolvedor Full Stack com sólida experiência em
            backend e integração de sistemas, atuando principalmente com Java
            (Spring Boot), PHP (Laravel), TypeScript, Angular e React. Possuo
            mais de 10 anos de experiência em Tecnologia da Informação, com uma
            trajetória que une infraestrutura, suporte, segurança e
            desenvolvimento de software.
          </p>

          <p className={estilos.sobre__infos__texto}>
            Sou formado em Análise e Desenvolvimento de Sistemas, com
            pós-graduação em Gestão de Tecnologia da Informação e Gestão da
            Qualidade de Software, além de residência em Tecnologia da
            Informação pela UFG em parceria com o Tribunal de Justiça de Goiás.
            Também possuo certificação ITIL 4 Foundation, reforçando minha visão
            orientada a processos, qualidade e entrega de valor.
          </p>

          <p className={estilos.sobre__infos__texto}>
            Atualmente atuo no desenvolvimento e evolução de sistemas
            corporativos e governamentais, participando de todo o ciclo de vida
            das aplicações: levantamento de requisitos, definição de regras de
            negócio, implementação de APIs REST, integrações com serviços
            externos, segurança, refatorações e sustentação. Tenho forte atuação
            em sistemas administrativos, orçamentários e de grande impacto
            social.
          </p>

          <p className={estilos.sobre__infos__texto}>
            Minhas competências técnicas incluem desenvolvimento backend com
            Java Spring Boot e Laravel, frontend moderno com Angular, React e
            TypeScript, além de experiência com bancos de dados relacionais como
            PostgreSQL e MySQL. Também atuo com Docker, Linux, versionamento com
            Git e práticas de Clean Code, arquitetura em camadas e APIs bem
            definidas.
          </p>

          <p className={estilos.sobre__infos__texto}>
            Tenho experiência com autenticação e segurança de aplicações,
            incluindo integração com Keycloak e Spring Security, além de atuação
            em ambientes ágeis, colaborativos e orientados à qualidade,
            performance e manutenibilidade. Valorizo código limpo, soluções
            simples para problemas complexos e comunicação clara entre times.
          </p>

          <p className={estilos.sobre__infos__texto}>
            Estou em constante evolução técnica e aprimoramento do inglês,
            buscando sempre aprender novas tecnologias, boas práticas e
            contribuir de forma significativa em projetos desafiadores. Se você
            procura um desenvolvedor comprometido, com visão sistêmica e
            experiência real em produção, fico à disposição para conectar e
            colaborar.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className={estilos.sobre__cards}>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Desenvolvedor Fullstack
            </h1>
            <ScrollLink to={"projetos"} className={estilos.sobre__cards__link}>
              Projetos
            </ScrollLink>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"</>"}</h1>
        </div>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>Freelancer</h1>
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
