import Header from "../../components/Header";
import { Section } from "../../components/Section";
import Mala from "../../assets/imagens/mala.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <Section
        titulo="Encontre aqui a viagem dos seus sonhos!!"
        conteudo="lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam auctor, nisl eget ultricies tincidunt, nunc elit
        tincidunt nunc, eget aliquam massa nisl eget lorem. Sed"
        imagem={Mala}
      />
    </>
  );
}
