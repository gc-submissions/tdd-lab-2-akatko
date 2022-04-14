let formatCurrency = (amount) => {
  if (amount >= 0) {
    amount = amount.toFixed(2);
    let text = amount.toString();
    return "$" + text;
  } else {
    amount = amount * -1;
    amount = amount.toFixed(2);
    let text = amount.toString();
    return "-$" + text;
  }
};

let getCoins = (cents) => {
  let quarters = Math.floor(cents / 25);
  let remaining = (cents - 25 * quarters).toFixed(2);

  let dimes = Math.floor(remaining / 10);
  remaining = (remaining - 10 * dimes).toFixed(2);

  let nickels = Math.floor(remaining / 5);
  remaining = (remaining - 5 * nickels).toFixed(2);

  let pennies = Math.floor(remaining / 1);

  let coins = {
    Quarters: quarters,
    Dimes: dimes,
    Nickels: nickels,
    Pennies: pennies,
  };
  return coins;
};

module.exports = {
  formatCurrency,
  getCoins,
};
