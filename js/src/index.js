#! /usr/bin/env node
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const log = console.log;

async function question(str) {
  const read = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await read.question(str);
  read.close();
  return answer;
}

(async function main() {
  let answer;
  let number1;
  let number2;

  log("Welcome to 2 numbers adding calculator :)");

  log(`Please select the number in () for the required operation to be done:
(1) Addition
(2) Subtraction
(3) Multiplication
(4) Division
`);

  while (true) {
    answer = await question("Enter the option number: ");

    if (["1", "2", "3", "4"].includes(answer)) {
      break;
    }

    log("Please enter the correct value :(");
  }

  while (true) {
    number1 = await question("Enter the 1st number: ");

    try {
      number1 = parseInt(number1);
      break;
    } catch {
      log("Please enter a valid number.");
    }
  }

  while (true) {
    number2 = await question("Enter the 2nd number: ");

    try {
      number2 = parseInt(number2);
      break;
    } catch {
      log("Please enter a valid number.");
    }
  }

  switch (answer) {
    case "1":
      log(`${number1} + ${number2} = ${number1 + number2}`);
      break;
    case "2":
      log(`${number1} - ${number2} = ${number1 - number2}`);
      break;
    case "3":
      log(`${number1} * ${number2} = ${number1 * number2}`);
      break;
    case "4":
      log(`${number1} / ${number2} = ${number1 / number2}`);
      break;
  }
})();
