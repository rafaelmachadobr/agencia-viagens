import styles from "./styles.module.scss";

import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Siga-nos em nossas redes sociais</p>
      <div className={styles.redesSociais}>
        <a href="https://www.instagram.com/" target="blank">
          <FaInstagram size={30} color="#E1306C" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <FaFacebook size={30} color="#4267B2" />
        </a>
        <a href="https://www.tiktok.com/" target="blank">
          <FaTiktok size={30} color="#000000" />
        </a>
        <a href="https://www.whatsapp.com/" target="blank">
          <FaWhatsapp size={30} color="#25D366" />
        </a>
      </div>
      <p>Telefone de contato: (11) 9555 - 3555</p>
    </footer>
  );
}
