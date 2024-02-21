#!/usr/bin/env -S deno run

const log = console.log;

function takeNumber(no: string) {
  let input;

  while (true) {
    input = prompt(`Enter the ${no} number:`)!;

    try {
      input = parseInt(input);
      break;
    } catch {
      log("Please enter a valid number.");
    }
  }

  return input;
}

(function main() {
  let answer;
  let number1 = 0;
  let number2 = 0;

  log("Welcome to 2 numbers adding calculator :)");

  log(`Please select the number in () for the required operation to be done:
(1) Addition
(2) Subtraction
(3) Multiplication
(4) Division
`);

  while (true) {
    answer = prompt("Enter the option number:")!;

    if (["1", "2", "3", "4"].includes(answer)) {
      break;
    }

    log("Please enter the correct value :(");
  }

  number1 = takeNumber("1st");
  number2 = takeNumber("2nd");

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
