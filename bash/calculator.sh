#! /bin/bash

answer=""
number1=0
number2=0

echo -e "Welcome to 2 numbers adding calculator :)"
echo -e "Please select the number in () for the requied operation to be done:
(1) Addition
(2) Subtraction
(3) Multiplication
(4) Division
"

while true; do
    read -p "Enter the option number: " answer

    [[ $answer == "1" || $answer == "2" || $answer == "3" || $answer == "4" ]] && break

    echo -e "Please enter the correct value :("
done

while true; do
    read -p "Enter the 1st number: " number1

    {
        number1=$(expr $number1 + 0)
        break
    } || echo -e "Please enter a valid number."
done

while true; do
    read -p "Enter the 2nd number: " number2

    {
        number2=$(expr $number2 + 0)

        if [[ $answer == "4" && $number2 -eq 0 ]]; then
            echo -e "Denominator can't be zero"
            continue
        fi
        break
    } || echo -e "Please enter a valid number."
done

case $answer in
"1") echo -e "${number1} + ${number2} = $(($number1 + $number2))" ;;
"2") echo -e "${number1} - ${number2} = $(($number1 - $number2))" ;;
"3") echo -e "${number1} * ${number2} = $(($number1 * $number2))" ;;
"4") echo -e "${number1} / ${number2} = $(($number1 / $number2))" ;;
*) echo -e "Error: No operation happened" ;;

esac
