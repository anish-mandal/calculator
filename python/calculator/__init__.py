#! /usr/bin/env python
p = print


def main():
    answer, number1, number2 = None, None, None

    p("Welcome to 2 numbers adding calculator :)")

    p(
        """Please select the number in () for the required operation to be done:
(1) Addition
(2) Subtraction
(3) Multiplication
(4) Division
      """
    )

    while True:
        answer = input("Enter the option number: ")

        if answer in ["1", "2", "3", "4"]:
            break

        p("Please enter the correct value :(")

    while True:
        try:
            number1 = int(input("Enter the 1st number: "))
            break
        except:
            p("Please enter a valid number.")

    while True:
        try:
            number2 = int(input("Enter the 2st number: "))

            if answer == "4":
                number1 / number2

            break
        except:
            p("Please enter a valid number.")

    match answer:
        case "1":
            p(f"{number1} + {number2} = {number1 + number2}")
        case "2":
            p(f"{number1} - {number2} = {number1 - number2}")
        case "3":
            p(f"{number1} * {number2} = {number1 * number2}")
        case "4":
            p(f"{number1} / {number2} = {number1 / number2}")


if __name__ == "__main__":
    main()
