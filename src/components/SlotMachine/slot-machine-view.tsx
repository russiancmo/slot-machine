import React, { useEffect } from "react";
import { SlotMachineStore } from "../../store/SlotMachine";
import { MemoizedPixi } from "../Pixi/pixi";
import { SlotMachineCanvas } from "./slot-machine-canvas";

export const SlotMachineView = () => {
  useEffect(() => {
    SlotMachineStore.generate();
  }, []);

  return (
    <MemoizedPixi
      callback={SlotMachineCanvas}
      store={SlotMachineStore}
      size={{ width: 800, height: 450 }}
    />
  );
};
