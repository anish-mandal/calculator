#!/usr/bin/env -S deno run

import * as inquirer from "https://deno.land/x/inquirer@v0.0.4/mod.ts";
import { capitalizeFirstLetter } from "./utils.ts";
import Chalkin from "https://deno.land/x/chalkin@v0.1.3/chalkin.ts";

const log = console.log;
const chalkin = new Chalkin();

async function intro() {
  let name = await inquirer.input({
    message: "What is you name ?",
    default: "user",
  });
  name = capitalizeFirstLetter(name);
  log(`Hi, ${chalkin.underline(name)}!\n`);
}

async function operation() {
  const operator = await inquirer.select({
    message: "What Operation you would wish to do ?",
    options: ["Addition", "Substraction", "Multiplication", "Division"],
    default: "Addition",
  });

  return operator;
}

async function askNumbers() {
  let num1 = await inquirer.input({
    message: "Enter the first number ?",
    default: "1",
  });
  num1 = parseInt(num1);

  let num2 = await inquirer.input({
    message: "Enter the second number ?",
    default: "1",
  });
  num2 = parseInt(num2);

  return { num1, num2 };
}

(async function main() {
  log(`Welcome to calculator in ${chalkin.bgBlue("TS")}`);
  log(`Before you use our ${chalkin.underline("calculator")}.\n`);

  // Introduction
  await intro();

  // What operation?
  const operator = await operation();

  // Numbers
  const { num1, num2 } = await askNumbers();

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
