use std::io::{self, Write};

fn main() -> Result<(), ()> {
    let mut answer_buffer: String;
    let number1: i32;
    let number2: i32;

    println!("Welcome to 2 numbers adding calculator :)");
    println!(
        "Please select the number in () for the required operation to be done:
(1) Addition
(2) Subtraction
(3) Multiplication
(4) Division"
    );

    loop {
        answer_buffer = String::new();

        print!("Enter option number: ");
        let _ = io::stdout().flush(); // flush the output first
        io::stdin()
            .read_line(&mut answer_buffer)
            .expect("Could not take input for option number.");

        if let "1" | "2" | "3" | "4" = answer_buffer.trim() {
            break;
        }
        println!("Please enter the correct value :(");
    }

    loop {
        let mut input = String::new();

        print!("Enter the first number: ");
        let _ = io::stdout().flush(); // flush the output first
        io::stdin()
            .read_line(&mut input)
            .expect("Could not take input for the first number.");

        match input.trim().parse::<i32>() {
            Ok(v) => {
                number1 = v;
                break;
            }
            Err(_) => println!("Please enter a valid number."),
        }
    }

    loop {
        let mut input = String::new();

        print!("Enter the second number: ");
        let _ = io::stdout().flush(); // flush the output first
        io::stdin()
            .read_line(&mut input)
            .expect("Could not take input for the second number.");

        match input.trim().parse::<i32>() {
            Ok(v) => {
                if answer_buffer.trim() == "4" {
                    if v == 0 {
                        println!("Denominator can't be zero");
                        continue;
                    }
                }
                number2 = v;
                break;
            }
            Err(_) => println!("Please enter a valid number."),
        }
    }

    match answer_buffer.trim() {
        "1" => println!("{} + {} = {}", number1, number2, number1 + number2),
        "2" => println!("{} - {} = {}", number1, number2, number1 - number2),
        "3" => println!("{} * {} = {}", number1, number2, number1 * number2),
        "4" => println!("{} / {} = {}", number1, number2, number1 / number2),
        _ => (),
    };

    Ok(())
}
