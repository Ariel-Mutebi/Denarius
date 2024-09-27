class Bank {

  constructor(
    private coins: number
  ) {}

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

export default Bank