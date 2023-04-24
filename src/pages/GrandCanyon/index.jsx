import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionLugar from "../../components/SectionLugar";

import Background from "../../assets/imagens/GrandCanyon.jpg";

export default function GrandCanyon() {
  return (
    <>
      <Header />
      <SectionLugar
        titulo="Grand Canyon"
        conteudo="O Grand Canyon é um desfiladeiro íngreme esculpido pelo rio Colorado, no estado do Arizona, nos Estados Unidos. A poderosa erosão causada pelas águas do rio Colorado ao longo de milhões de anos expôs camadas formadas por 2 bilhões de anos de história geológica da Terra."
        background={Background}
      />
      <Footer />
    </>
  );
}
