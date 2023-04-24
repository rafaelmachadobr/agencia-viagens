import Header from "../../components/Header";
import { SectionHome } from "../../components/SectionHome";
import Mala from "../../assets/imagens/mala.jpg";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHome
        titulo="Encontre aqui a viagem dos seus sonhos!!"
        conteudo="lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam auctor, nisl eget ultricies tincidunt, nunc elit
        tincidunt nunc, eget aliquam massa nisl eget lorem. Sed"
        imagem={Mala}
      />
      <Footer />
    </>
  );
}
