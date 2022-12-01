import React from "react";
import { ProfileStore } from "../../../../store/Profile";
import { observer } from "mobx-react-lite";
import styles from './balance-view.module.scss';

export const BalanceView = observer(() => {
  return (
    <div className={styles.balance}>
      Мой баланс: 
      <span className={styles["balance__count"]}> {ProfileStore.money}</span>
    </div>
  );
});
