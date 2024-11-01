import BankInstance from "./Bank";
import Singleton from "./Singleton";

describe("Bank instance", () => {
  test("inherits from Singleton.", () => {
    expect(BankInstance instanceof Singleton).toBe(true);
  });

  test("showBalance starts at zero.", () => {
    expect(BankInstance.showBalance()).toBe(0);
  });

  test("deposit method adds to balance.", () => {
    const sum = 10;
    BankInstance.deposit(sum);
    expect(BankInstance.showBalance()).toBe(sum);
    // clean-up
    BankInstance.deduct(sum);
  });

  test("deposit does NOT add to balance and throws error when input value is negative.", () => {
    const openingBalance = BankInstance.showBalance();
    expect(() => BankInstance.deposit(-10)).toThrow();
    expect(BankInstance.showBalance()).toBe(openingBalance);
  });

  test("deduct reduces balance and returns true when the bank balance is sufficient.", () => {
    const openingBalance = BankInstance.showBalance(); // in case side effects from other asynchronously-running tests cause it not to be zero.
    const sumToDeposit = 30;
    const sumToDeduct = 20;
    const closingBalance = openingBalance + (sumToDeposit - sumToDeduct);

    BankInstance.deposit(sumToDeposit);
    expect(BankInstance.deduct(sumToDeduct)).toBe(true);
    expect(BankInstance.showBalance()).toBe(closingBalance);
  });

  test("deduct does NOT reduce balance and does return false when balance is insufficient.", () => {
    const openingBalance = BankInstance.showBalance();
    const moreThanBalance = openingBalance + 100;
    expect(BankInstance.deduct(moreThanBalance)).toBe(false);
    expect(BankInstance.showBalance()).toBe(openingBalance);
  });
});