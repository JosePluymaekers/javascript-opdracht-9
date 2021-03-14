
//function declaration
function result1(
    number1,
    number2,
) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const squaretotal = square1 + square2;
    const outcome = squaretotal * squaretotal;
    return outcome
};

console.log(result1(3, 3));

//function expression
const result2 = function (
    number1,
    number2,
) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const squaretotal = square1 + square2;
    const outcome = squaretotal * squaretotal;
    return outcome
};

console.log(result2(3, 3));


//arrow functions

const result = (number1, number2) => {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const squaretotal = square1 + square2;
    const outcome = squaretotal * squaretotal;
    return outcome
};

console.log(result(3, 3));
