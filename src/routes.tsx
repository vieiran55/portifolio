import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import estilos from "./styles/Routes.module.scss";
import Home from "./pages/Home";
import NavBar from "./componentes/NavBar";
import Rodape from "./componentes/Rodape";
import Sobre from "./componentes/Sobre";
import WhatsappButton from "./componentes/WhatsappButton";

export default function AppRouter() {
  return (
    <div className={estilos.routes}>
      <Router>
        <WhatsappButton />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
        <Rodape />
      </Router>
    </div>
  );
}
