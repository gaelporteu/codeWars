function oddOrEven(array) {
    let sum = array.reduce(
        ((accumulator, currentValue) => accumulator += currentValue), 0
    )
    return (sum % 2 === 0) ? "even" : "odd";
 }