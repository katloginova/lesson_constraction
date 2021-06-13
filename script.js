'use strict';

function Calculator(baseNum) {
    this.base = baseNum;

    this.sum = (num) => baseNum = (baseNum + num);
    this.sub = (num) => baseNum = (baseNum - num);
    this.mult = (num) => baseNum = (baseNum * num);
    this.div = (num) => baseNum = (baseNum / num);
    this.set = (num) => baseNum = num;
    this.result = () => baseNum;
}

const calc = new Calculator(100);

console.log(calc.sum(100));
console.log(calc.sub(50));
console.log(calc.mult(2));
console.log(calc.set(150));
console.log(calc.div(5));
console.log(calc.result(5));