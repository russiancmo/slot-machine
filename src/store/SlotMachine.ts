import { makeAutoObservable } from "mobx";

export class SlotMachineModel {
  combinations: number[][] = [];

  constructor() {
    makeAutoObservable(this);
  }

  randomInteger(min: number, max: number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getUniqueIndexes(length: number) {
    const indexes: number[] = [];

    while (indexes.length < length) {
      const index = Math.abs(this.randomInteger(0, length - 1));
      if (indexes.includes(index)) {
        continue;
      }
      indexes.push(index);
    }

    return indexes;
  }

  get isWin() {
    const rows = this.combinations[0]?.map((_, colIndex) =>
      this.combinations?.map((row) => row[colIndex])
    );

    const bothCount = [0, 0, 0];
    return rows?.some((row, index) => {
      for (let i = 0; i < row.length; i++) {
        if (row[i] === row[i + 1] && row[i] === row[i + 2]) {
          bothCount[index] = bothCount[index] + 1;
        }
      }

      return bothCount.some((item) => item >= 1);
    });
  }

  clearArray = (array: number[][]) => {
    while(array.length > 0) {
        array.pop();
    }
  }

  generate = () => {
    for (let i = 0; i < 5; i++) {
      this.combinations.push(this.getUniqueIndexes(9));
    }
  }

  refillCombinationsList = (newArray: number[]) => {
    this.clearArray(this.combinations);
    this.combinations.push(newArray)
  }
}

export const SlotMachineStore = new SlotMachineModel();
