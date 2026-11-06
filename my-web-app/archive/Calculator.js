function Calculator(a, b) {
    return a + b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}
console.log(Calculator(5, 3));
console.log(Multiply(5, 3));
console.log(Divide(10, 2));
console.log(Divide(5, 0));
console.log(Divide(10, -2));
