import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import estilos from "./WhatsappButton.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function WhatsappButton() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div data-aos="flip-up" className={estilos.conteiner}>
      <Link
        className={estilos.conteiner_link}
        to={`https://api.whatsapp.com/send?phone=+5561999981928&text=${encodeURIComponent(
          " Olá! Gostaria de solicitar um orçamento.",
        )}`}
        target="_blank"
      >
        <IoLogoWhatsapp className={estilos.conteiner_icon} />
      </Link>
    </div>
  );
}