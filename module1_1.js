function modularCalculator(op, num1, num2, mod) {
    let r = 0;
    /*
    not appropriate for large numbers
    */
    if(op == "+"){
        r = (num1 + num2) % mod
    }
    else if(op == "-"){
        r = num1 > num2 ? (num1 - num2) % mod : (num1 - num2) % mod + mod
    }
    else if(op == "*"){
        r = (num1 * num2) % mod
    }
    else{
        console.log("invalid operation");
    }
    console.log(r);
    return r;
}

modularCalculator('+', 10, 15, 12); // Should return: 1
modularCalculator('-', 10, 15, 12); // Should return: 7
modularCalculator('*', 10, 15, 12); // Should return: 6