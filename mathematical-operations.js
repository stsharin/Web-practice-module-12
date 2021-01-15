var price1 = 12;
var price2 = 15;

var total = (price1 + price2);
console.log(total);

var minus = (price2 - price1);
console.log(minus);

var mult = (price1 * price2);
console.log(mult);

var div = (price1 / price2);
console.log(div);

var remainder = (price2 % price1);
console.log(remainder);

remainder++;
// remainder--;
console.log(remainder);

var fname = "Justin";
var lname = "Bieber";
var fullname = "Full Name is: " + fname +" "+ lname;
console.log(fullname);

var one = "99.5";
var two = 15;
console.log(one+two);

// math absolute
// negative to positive
var num1 = -5;
var absoluteNumber1 = Math.abs(num1);
console.log(absoluteNumber1);

// but positive will stay positive
var num2 = 10;
var absoluteNumber2 = Math.abs(num2);
console.log(absoluteNumber2);

var num3 = 7.525352;
var roundNumber = Math.round(num3);
console.log(roundNumber);

var num4 = 7.000002;
var ceil = Math.ceil(num4);
console.log(ceil);

var num5 = 7.000002;
var floor = Math.floor(num5);
console.log(floor);

// for random value
console.log(Math.random());

// to find a random number  from 1 to 100
var number = (Math.random() * 100);
var result = Math.round(number);
console.log("Random number: " + result);