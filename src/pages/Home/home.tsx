import React from "react";
import { SlotMachine } from "../../components/SlotMachine/slot-machine";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <SlotMachine />
    </div>
  );
};
