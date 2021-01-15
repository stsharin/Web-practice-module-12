// number
var bananaPrice = 12;
console.log(bananaPrice);

var time = 10;
console.log(time);

var tempareture = 19;
console.log(tempareture);

// type of
console.log(typeof time);

// string
var name = "Hello World";
console.log(name);
console.log(typeof (name));

// boolean
var isHot = true;
var isRich = false;
console.log(isHot);
console.log(isRich);
console.log(typeof(isRich));

var promise = "I promise I will work hard to become a Web Developer."
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());

// check
// starting point of that word (case sensitive)
console.log(promise.indexOf("will"));
console.log(promise.split("I"));
// console.log(promise.split(" "));

var para = "I am a javascript developer";
console.log(para.indexOf("j"));

// integer float
var num1 = 25;
var num2 = 15.5;
var num3 = "35";
var num4 = 40.5;
console.log(num1 + num2);
console.log(num3 + num4);

// convert into a number
// num3 = parseFloat(num3);
// console.log(num3 + num4);

// convert into a integer number
num3 = +num3
// num3 = parseInt(num3);
console.log(num3 + num4);

num4 = "" + num4;
console.log(typeof(num4));

var num5 = 0.1;
var num6 = 0.2;
console.log(num5 + num6);

var total = (num5 + num6);
total = total.toFixed(3);
console.log(total);