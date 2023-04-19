import styles from "./styles.module.scss";
import Logo from "../../assets/imagens/viagens.jpg";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" className={styles.logo} />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/grand-canyon">Grand Canyon</a>
          </li>
          <li>
            <a href="/escocia">Escocia</a>
          </li>
          <li>
            <a href="/muralhas-da-china">Muralhas da China</a>
          </li>
          <li>
            <a href="/aruba">Aruba</a>
          </li>
        </ul>
      </nav>
      <div className={styles.pesquisa}>
        <input type="text" placeholder="Pesquisar" className={styles.input} />
        <BiSearch className={styles.icon} />
      </div>
    </header>
  );
}
