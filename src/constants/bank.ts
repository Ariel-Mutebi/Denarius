import Bank from "../classes/Bank";
import getCoins from "../storage/getCoins";

const bank = new Bank(getCoins())

export default bank;