import { ProfileModel } from "../../../store/Profile";

const toBetIncrease = (profile: ProfileModel, count: number) => {
  for (let i = 0; i < count; i++) {
    profile.increaseBet();
  }
};

const toBetDecrease = (profile: ProfileModel, count: number) => {
  for (let i = 0; i < count; i++) {
    profile.decreaseBet();
  }
};

describe("Profile store tests", () => {
  describe("Change money", () => {
    test("add money", () => {
      const profile = new ProfileModel();
      profile.addMoney(10);
      const money = profile.money;
      expect(money).toBe(1010);
    });

    test("decrease money", () => {
      const profile = new ProfileModel();
      profile.decreaseMoney(10);
      const money = profile.money;
      expect(money).toBe(990);
    });

    describe("change Money after game over", () => {
      test("Win", () => {
        const profile = new ProfileModel();
        toBetIncrease(profile, 3);
        profile.handleChangeMoney(true);
        const money = profile.money;
        expect(money).toBe(1020);
      });

      test("Lose", () => {
        const profile = new ProfileModel();
        toBetIncrease(profile, 3);
        profile.handleChangeMoney(false);
        const money = profile.money;
        expect(money).toBe(980);
      });
    });
  });

  describe("Change bet", () => {
    const profile = new ProfileModel();
    test("increase bet", () => {
      toBetIncrease(profile, 3);
      const bet = profile.bet;
      expect(bet).toBe(10);
    });

    test("decrease bet", () => {
      toBetDecrease(profile, 2);
      const bet = profile.bet;
      expect(bet).toBe(1);
    });
  });

  describe("Won money count", () => {
    const profile = new ProfileModel();
    test("get Won money count", () => {
      toBetIncrease(profile, 3);
      profile.handleChangeMoney(true);
      const sum = profile.winSum;
      expect(sum).toBe(20);
    });
  });
});
