import React from "react";
import { SlotMachineView } from "./slot-machine-view";
import { BalanceView } from "./components/BalanceView/balance-view";
import { BetActions } from "./components/BetActions/bet-actions";
import { PlayAction } from "./components/PlayAction/play-action";
import { GameResult } from "./components/GameResult/game-result";
import styles from "./slot-machine.module.scss";

export const SlotMachine = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <BalanceView />
      </div>
      <SlotMachineView />
      <div className={styles.actions}>
        <BetActions />
        <div className={styles["play-button"]}>
          <PlayAction />
        </div>
        <GameResult />
      </div>
    </div>
  );
};
