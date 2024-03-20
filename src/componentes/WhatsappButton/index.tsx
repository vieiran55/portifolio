import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import estilos from "./WhatsappButton.module.scss";


export default function WhatsappButton() {
  return (
    <div className={estilos.conteiner}>
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