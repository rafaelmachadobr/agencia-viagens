import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <h1>404 - Página não encontrada</h1>
          <a href="/">Voltar para a Home</a>
        </div>
      </main>
    </>
  );
}
