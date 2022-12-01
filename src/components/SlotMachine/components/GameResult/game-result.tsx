import React from "react";
import { SlotMachineStore } from "../../../../store/SlotMachine";
import { observer } from "mobx-react-lite";
import { ProfileStore } from "../../../../store/Profile";
import styles from './game-result.module.scss';

export const GameResult = observer(() => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Выигрыш</span>
      <span className={styles.label}>{ProfileStore.winSum}</span>
    </div>
  );
});
