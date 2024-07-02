const Enterednumber = prompt("Enter a number: ")
const number = Number(Enterednumber)

const isNumberEven = number % 2 == 0

if (isNumberEven) {
    alert("The number is Even")
} else {
    alert("The number is Odd")
}