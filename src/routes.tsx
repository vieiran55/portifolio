import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./componentes/NavBar";
import Rodape from "./componentes/Rodape";

export default function AppRouter() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Rodape />
    </Router>
  );
}