var curTemp= 90;
var consHot= 88;
var isHotOutside = curTemp >= consHot;
console.log(isHotOutside);


var workDay= 1;
var curDay= 2;
var isWeekday = curDay != workDay;
console.log(isWeekday);


var broke= 0;
var notBroke= 1;
var hasMoneyInPocket = notBroke > broke;
console.log(hasMoneyInPocket);


var shouldByIcecream = isHotOutside && hasMoneyInPocket;
console.log (shouldByIcecream);
  

var willGoSwimming = isHotOutside && isWeekday;
console.log(willGoSwimming);


var isAGoodDay = isHotOutside && hasMoneyInPocket || isWeekday;
console.log(isAGoodDay);

var costOfMilk = 1.99
var thirstLevel = 4;
moneyInWallet = 5.00

var willBuyMilk = thirstLevel >=3 && moneyInWallet >= 2*costOfMilk && isHotOutside;

console.log(willBuyMilk);


