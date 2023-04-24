import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionLugar from "../../components/SectionLugar";

import Background from "../../assets/imagens/Muralha.jpg";

export default function MuralhasDaChina() {
  return (
    <>
      <Header />
      <SectionLugar
        titulo="Muralhas da China"
        conteudo="A Grande Muralha da China é uma série de fortificações feitas de pedra, tijolo, terra compactada, madeira e outros materiais, geralmente construída ao longo de uma linha leste-oeste através das fronteiras históricas do norte da China para proteger os Estados e impérios chineses contra as invasões dos vários grupos nômades das estepes da Eurásia, principalmente os mongóis."
        background={Background}
      />
      <Footer />
    </>
  );
}
