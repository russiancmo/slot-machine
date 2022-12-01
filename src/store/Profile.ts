import { makeAutoObservable } from "mobx";

export class ProfileModel {
  factor: number = 2;
  betFactor: number[] = [1, 5, 10, 25, 50, 100];
  firstMoney: number = 1000;
  money: number = this.firstMoney;
  bet: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addMoney = (count: number) => {
    this.money += count;
  };

  decreaseMoney = (count: number) => {
    this.money -= count;
  };

  nextBet = () => {
    if (this.bet > 0) {
      return this.betFactor[this.betFactor.indexOf(this.bet) + 1];
    } else {
      return this.betFactor[0];
    }
  };

  lastBet = () => {
    if (this.bet > this.betFactor[0]) {
      return this.betFactor[this.betFactor.indexOf(this.bet) - 1];
    } else {
      return 0;
    }
  };

  increaseBet = () => {
    if (this.money - (this.bet + this.nextBet()) >= 0) {
      this.bet = this.nextBet();
    }
  };

  decreaseBet = () => {
    this.bet = this.lastBet();
  };

  handleChangeMoney = (isWin: boolean) => {
    const moneyCount = this.bet * this.factor;
    if (isWin) {
      this.addMoney(moneyCount);
    } else {
      this.decreaseMoney(moneyCount);
    }
  };

  get winSum() {
    return this.money - this.firstMoney;
  }
}

export const ProfileStore = new ProfileModel();
