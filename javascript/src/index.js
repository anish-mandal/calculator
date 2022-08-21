#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { capitalizeFirstLetter } from "./utils.js";

const log = console.log;

async function intro() {
  let name = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What is you name ?",
    default() {
      return "User";
    },
  });
  name = capitalizeFirstLetter(name.playerName);
  log(`Hi, ${chalk.underline(name)}!\n`);
}

async function operation() {
  let operator = await inquirer.prompt({
    name: "name",
    type: "list",
    message: "What Operation you would wish to do ?",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
    default() {
      return "Addition";
    },
  });

  operator = operator.name;
  return operator;
}

async function askNumbers() {
  let num1 = await inquirer.prompt({
    name: "number1",
    type: "number",
    message: "Enter the first number ?",
    default() {
      return 1;
    },
  });
  num1 = num1.number1;

  let num2 = await inquirer.prompt({
    name: "number2",
    type: "number",
    message: "Enter the second number ?",
    default() {
      return 1;
    },
  });
  num2 = num2.number2;

  return { num1, num2 };
}

(async function main() {
  log(`Welcome to calculator in ${chalk.bgYellow("JS")}`);
  log(`Before you use our ${chalk.underline("calculator")}.\n`);

  // Introduction
  await intro();

  // What operation?
  let operator = await operation();

  // Numbers
  let { num1, num2 } = await askNumbers();

  // Calculation
  if (operator === "Addition") {
    log(`Result: ${num1} + ${num2} = ${num1 + num2}\n`);
  } else if (operator === "Substraction") {
    log(`Result: ${num1} - ${num2} = ${num1 - num2}\n`);
  } else if (operator === "Multiplication") {
    log(`Result: ${num1} * ${num2} = ${num1 * num2}\n`);
  } else if (operator === "Division") {
    log(`Result: ${num1} / ${num2} = ${num1 / num2}\n`);
  }

  log(`Thanks for using my calculator.`);
})();
