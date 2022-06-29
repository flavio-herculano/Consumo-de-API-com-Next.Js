import React, { Component } from "react";
import Styles from "../styles/list.module.css";
import ListRow from "./ListRow";

export default class List extends Component {
  render() {
    return (
      <section className={Styles.sectionList}>
        <div className={Styles.divList}>
          <ListRow />
          <ListRow />
        </div>
      </section>
    );
  }
}
