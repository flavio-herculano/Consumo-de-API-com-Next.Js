import React, { Component } from "react";
import styles from "../styles/head.module.css";
import Link from "next/link";

export default class Head extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href={`/`}>
            <img
              className={styles.img}
              src="/images/logo-imob-520.png"
              alt="imob-logo"
              height={32}
            />
          </Link>

          <div className={styles.divMenuItems}>
            <div className={styles.divWhats}>
              <img src="images/whatsapp.png" alt="" height={24} />
              <a
                className={styles.myNumber}
                href="https://wa.me/5511988886542?text=Ol%C3%A1+Fl%C3%A1vio."
              >
                11 9 8888-6542
              </a>
            </div>
            <img src="/images/hamburg.png" alt="" />
          </div>
        </div>
      </header>
    );
  }
}
