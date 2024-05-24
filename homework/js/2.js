let number = (prompt("Nhập vào một số:"));
let newNumber = "";
while (isNaN(number) || number.length == 0) {
    number = (prompt("Hãy nhập vào một số:"));
}
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
        newNumber += number[i] + "-";
    } else {
        newNumber += number[i];
    }
}
console.log(newNumber);