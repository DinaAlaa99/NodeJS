const  calculator  = require('./calculator')
const ageCalculator   = require ('./ageCalculator')

console.log(calculator.add(1, 2)) //3
console.log(calculator.sub('a', 'b')) //error
console.log(calculator.multiply(2, 5)) //10

console.log(ageCalculator("Dina", "2020-03-02")) //error
console.log(ageCalculator("Dina", "1999-03-13")) //Hello Dina your age is 23