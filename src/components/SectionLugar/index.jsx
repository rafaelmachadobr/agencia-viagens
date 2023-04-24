import styles from "./styles.module.scss";
import Logo from "../../assets/imagens/viagens.jpg";

export default function SectionLugar({ titulo, conteudo, background }) {
  return (
    <>
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.container}>
          <h2 className={styles.titulo}>
            Venha explorar esse lugar incrivel {titulo}!!!
          </h2>
          <p>{conteudo}</p>
          <div className={styles.imagemContainer}>
            <img className={styles.imagem} src={Logo} alt={titulo} />
          </div>
        </div>
      </section>
    </>
  );
}
