const {
  formatCurrency,
  getCoins,
} = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Given the amount 0, it returns '$0.00'.", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
  test("Given the amount 1, it returns '$1.00'.", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  })
  test("Given the amount 1.5 it returns '$1.50'.", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  })
  test("Given the amount 0.01, it returns '$0.01'.", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  })
  test("Given the amount 527.6789, it returns '$527.68'.", () => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  })
  test("Given the amount -1, it returns '-$1.00'.", () => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  })
  test("Given the amount 1000, it returns '$1000.00'.", () => {
    expect(formatCurrency(1000)).toEqual("$1000.00");
  })
  test("Given the amount -210000, it returns '-$210000.00'.", () => {
    expect(formatCurrency(-210000)).toEqual("-$210000.00");
  })
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    expect(getCoins(32)).toEqual({Quarters: 1, Dimes: 0, Nickels: 1, Pennies: 2});
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
    expect(getCoins(10)).toEqual({Quarters: 0, Dimes: 1, Nickels: 0, Pennies: 0});
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", () => {
    expect(getCoins(27)).toEqual({Quarters: 1, Dimes: 0, Nickels: 0, Pennies: 2});
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    expect(getCoins(68)).toEqual({Quarters: 2, Dimes: 1, Nickels: 1, Pennies: 3});
  });
});