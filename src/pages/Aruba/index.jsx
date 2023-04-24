import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionLugar from "../../components/SectionLugar";

import Background from "../../assets/imagens/Aruba.jpg";

export default function Aruba() {
  return (
    <>
      <Header />
      <SectionLugar
        titulo="Aruba"
        conteudo="Praias paradisíacas, mar cristalino, hotéis requintados, cassinos e programação para toda a família são alguns dos atrativos de Aruba."
        background={Background}
      />
      <Footer />
    </>
  );
}
