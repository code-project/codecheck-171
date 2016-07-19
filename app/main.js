"use strict";

function fizzbuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 5 === 0)  return "Buzz";
  if (n % 3 === 0)  return "Fizz";
  return n.toString();
}

function main(args, options) {
  var n = parseInt(args[0]);
  console.log(fizzbuzz(n));
}

module.exports = main;
