import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Developed by, <br /> Flávio Herculano de Souza.
        </p>
      </div>

      <div className={styles.divWhats}>
        <img src="images/whatsapp.png" alt="" height={24} />
        <a
          className={styles.myNumber}
          href="https://wa.me/5511988886542?text=Ol%C3%A1+Fl%C3%A1vio."
        >
          11 9 8888-6542
        </a>
        <p>-</p>
        <a
          className={styles.myNumber}
          href="mailto:flavio.hercullano@gmail.com"
        >
          Flavio.hercullano@gmail.com
        </a>
      </div>
    </footer>
  );
}
