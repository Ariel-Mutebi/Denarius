import getCoins from "../storage/getCoins"
import Singleton from "./Singleton"

class Bank extends Singleton{
  constructor(
    private coins: number
  ) {
    super()
  }

  deposit(amount: number) {
    this.coins += amount
    this.store()
  }

  deduct(amount: number) {
    const deductible = (this.coins - amount) >= 0

    if(deductible) {
      this.coins -= amount
    } else {
      this.coins = 0
    }

    this.store()

    return deductible
  }

  showBalance() {
    return this.coins
  }

  private store() {
    localStorage.setItem("coins", String(this.coins))
  }
}

const BankInstance = new Bank(getCoins())

export default BankInstance