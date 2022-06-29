import Styles from "../styles/list.module.css";
import Card from "./card";
import React, { Component } from "react";

export default class ListRow extends Component {
  render() {
    return (
      <div className={Styles.listRow}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
