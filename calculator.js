
function myCalculator(num1, num2, op){
    switch (op)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '/':
            return num1 / num2;
            break
        case '*':
            return num1 * num2;
            break;
    }
}

console.log(myCalculator(10, 3, '/'))