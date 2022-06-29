import styles from "../styles/card.module.css";
import axios from "axios";

const Card2 = ({ dados }) => (
  <div>
    {console.log(dados)}{" "}
    <ul>
      {dados.map((card) => (
        <li key={card.id}>
          <div className={styles.Card}>
            <h1 className={styles.cardTitle}>{card.title}</h1>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Card2.getInitialProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return { dados: response.data };
};

export default Card2;
