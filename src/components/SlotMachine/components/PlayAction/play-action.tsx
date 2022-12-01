import React from "react";
import { ProfileStore } from "../../../../store/Profile";
import { SlotMachineStore } from "../../../../store/SlotMachine";
import { Button } from "../../../Button/button";
import { startPlay } from "../../functions/game-logic";
import { observer } from "mobx-react-lite";
import styles from './play-action.module.scss';

export const PlayAction = observer(() => {
  return (
    <Button
      title="Спин"
      className={styles.button}
      onClick={() => {
        startPlay().then(() => {
          ProfileStore.handleChangeMoney(SlotMachineStore.isWin);
        });
      }}
    />
  );
});
