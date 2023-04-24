import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Background from "../../assets/imagens/Escocia.jfif";
import SectionLugar from "../../components/SectionLugar";

export default function Escocia() {
  return (
    <>
      <Header />
      <SectionLugar
        titulo="Escócia"
        conteudo="A Escócia é um país que faz parte do Reino Unido. É um país com uma história rica, com uma cultura própria, e com uma identidade nacional forte. A Escócia é um país que faz parte do Reino Unido. É um país com uma história rica, com uma cultura própria, e com uma identidade nacional forte."
        background={Background}
      />
      <Footer />
    </>
  );
}
