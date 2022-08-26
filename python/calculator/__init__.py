import inquirer
from colors import FONT_STYLE
import os
os.system("")  # enables ansi escape characters in terminal


def main() -> None:
    print("Welcome to calculator in " +
          FONT_STYLE["BLUE"] +
          "py" +  # py in blue
          FONT_STYLE["END"] +
          FONT_STYLE["YELLOW"] +
          "thon" +  # thon in yellow
          FONT_STYLE["END"])

    print("Before getting started with the calculator\n")

    # Intro
    name = inquirer.text(message="What is your name ?")
    if (name == ''):
        print("Hello, User")
    else:
        print("Hello, " + FONT_STYLE["UNDERLINE"] +
              name.capitalize().strip() + FONT_STYLE["END"])

    # operation
    operator = ["Addition", "Substraction", "Multiplication", "Division"]
    operation = inquirer.list_input(
        message="What operation you would like to do ?",
        choices=operator)

    # asking numbers
    while (True):
        try:
            num1 = inquirer.text(message="Enter your first number")
            num1 = int(num1)
            break
        except:
            print("Only numbers are allowed")
            continue

    while (True):
        try:
            num2 = inquirer.text(message="Enter your second number")
            num2 = int(num2)
            break
        except:
            print("Only numbers are allowed")
            continue

    # conditions to handle the operation and result
    if operation == operator[0]:
        print(f"Result: {num1} + {num2} = {num1 + num2}")
    elif operation == operator[1]:
        print(f"Result: {num1} - {num2} = {num1 - num2}")
    elif operation == operator[2]:
        print(f"Result: {num1} * {num2} = {num1 * num2}")
    elif operation == operator[3]:
        if num2 == 0:
            print("Anything divided by zero will result in undefined")
            print("\nThanks for using the calculator")

            return
        print(f"Result: {num1} / {num2} = {num1 / num2}")

    print("\nThanks for using the calculator")


# execute main
if __name__ == "__main__":
    main()
