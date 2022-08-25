mod lib;
use crate::lib::uppercase_first_letter;
use colored::*;
use inquire;
use std::io::Result;

fn intro() {
    loop {
        let name = inquire::Text::new("What is your name ?")
            .with_default("User")
            .prompt();

        match name {
            Ok(val) => {
                println!(
                    "Welcome to my calculator, {}\n",
                    uppercase_first_letter(val)
                );
                break;
            }
            Err(_) => {
                eprintln!(
                    "Something went wrong while your name input, no worry put your name again."
                );
                continue;
            }
        }
    }
}

fn operator_selection() -> String {
    loop {
        let operations = vec!["Addition", "Substraction", "Multiplication", "Division"];
        let operator =
            inquire::Select::new("What Operation you would wish to do ?", &operations).prompt();

        match operator {
            Ok(val) => return val.to_string(),
            Err(_) => {
                eprintln!("Something went wrong while taking the input for which operation you want to do but no worry you can input it again.");
                continue;
            }
        }
    }
}

fn asking_num2() -> f32 {
    loop {
        let num2 = inquire::Text::new("What is the second number ?")
            .with_default("1")
            .prompt();

        match num2 {
            Ok(val) => {
                let num2: f32 = match val.trim().parse() {
                    Ok(val) => val,
                    Err(_) => {
                        eprintln!("Wrong Input.");
                        continue;
                    }
                };
                return num2;
            }
            Err(_) => {
                eprintln!("Failed to take input of your second number.");
                continue;
            }
        }
    }
}

fn asking_num1() -> f32 {
    loop {
        let num1 = inquire::Text::new("What is the first number ?")
            .with_default("1")
            .prompt();

        match num1 {
            Ok(val) => {
                let num1: f32 = match val.trim().parse() {
                    Ok(val) => val,
                    Err(_) => {
                        eprintln!("Wrong Input.");
                        continue;
                    }
                };
                return num1;
            }
            Err(_) => {
                eprintln!("Failed to take your input for first number.");
                continue;
            }
        }
    }
}

fn main() -> Result<()> {
    println!(
        "Welcome to my calculator in {}\n",
        "rust".on_truecolor(255, 165, 0)
    );
    println!("Before you can use the {}", "calculator".underline());

    intro();
    let operation = operator_selection();
    let num1 = asking_num1();
    let num2 = asking_num2();

    if operation == "Addition" {
        println!("Result: {} + {} = {}", num1, num2, num1 + num2);
    } else if operation == "Substraction" {
        println!("Result: {} - {} = {}", num1, num2, num1 - num2)
    } else if operation == "Multiplication" {
        println!("Result: {} * {} = {}", num1, num2, num1 * num2);
    } else if operation == "Division" {
        if num2 == 0.0 {
            println!("Anything divided by 0 will result in undefined");

            return Ok(());
        }
        println!(
            "Result: {} / {} = {}",
            num1,
            num2,
            num1 as f32 / num2 as f32
        );
    }

    println!("Thanks for using my calculator in rust");

    Ok(())
}
