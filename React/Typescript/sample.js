//import {Invoice} from './modules/invoice.js'
var num = 30;
//arrays
var ninjas = [];
ninjas.push('asdf');
//union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var ninjaOne;
ninjaOne = { name: 'abcd', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'aaa', age: 45 };
//function signatures
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
greet('dakshna', 'hello');
var calc;
calc = function (numOne, numTwo, action) {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(5, 7, 'sub'));
// classes
var GoodGreeter = /** @class */ (function () {
    function GoodGreeter() {
        this.name = "hello";
    }
    return GoodGreeter;
}());
var me = {
    name: 'ABCD',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
var greetPerson = function (person) {
    console.log('Hello', person.name);
};
greetPerson(me);
