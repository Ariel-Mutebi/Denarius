import PS from "./PubSub"
import getCoins from "../storage/getCoins"
import Singleton from "./Singleton"
import PSE from "../enums/PubSubEvents"

class Bank extends Singleton{
  constructor(
    private coins: number
  ) {
    super();
  };

  deposit(amount: number) {
    this.coins += amount;
    this.depositMessage(amount);
    this.store();
  };

  deduct(amount: number) {
    const deductible = (this.coins - amount) >= 0;

    if(deductible) {
      this.coins -= amount;
      this.deductMessage(amount);
    } else {
      this.coins = 0;
      this.undetuctibleMessage();
    }

    this.store();

    return deductible;
  };

  showBalance() {
    return this.coins;
  };

  private depositMessage(amount: number) {
    PS.publish(PSE.PostMessage, 
      `Yay! You earned ${amount} coins. Total coins:  ${this.showBalance()}`
    );
  };

  private deductMessage(amount: number) {
    PS.publish(PSE.PostMessage, 
      `You lost ${amount} coins. Balance: ${this.showBalance()}`
    );
  };

  private undetuctibleMessage() {
    PS.publish(PSE.PostMessage, "Error! Coins to few to subtract from.");
  };

  private store() {
    PS.publish(PSE.PutCoins, this.coins);
  };
};

const BankInstance = new Bank(getCoins());

export default BankInstance;