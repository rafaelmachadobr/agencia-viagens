import styles from "./styles.module.scss";

export function SectionHome({ titulo, conteudo, imagem }) {
  return (
    <section className={styles.section}>
      <div className={styles.imagemContainer}>
        <img className={styles.imagem} src={imagem} alt={titulo} />
      </div>
      <div className={styles.conteudoContainer}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.conteudo}>{conteudo}</p>
      </div>
    </section>
  );
}
