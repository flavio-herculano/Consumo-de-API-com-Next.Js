import styles from "../styles/card.module.css";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className={styles.Card}>
        <h1 className={styles.cardTitle}>
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h1>
      </div>
    );
  }
}
