import React from "react";
import { ProfileStore } from "../../../../store/Profile";
import { Button } from "../../../Button/button";
import { observer } from "mobx-react-lite";
import styles from "./bet-actions.module.scss";
import cn from 'classnames';

export const BetActions = observer(() => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Ставка</span>
      <div className={styles.actions}>
        <div className={styles["actions__item"]}>
          <Button title="-" onClick={() => ProfileStore.decreaseBet()} className={styles.button} />
        </div>
        <div className={cn(styles["actions__item"], styles["actions__bet"])}>{ProfileStore.bet}</div>
        <div className={styles["actions__item"]}>
          <Button title="+" onClick={() => ProfileStore.increaseBet()} className={styles.button} />
        </div>
      </div>
    </div>
  );
});
