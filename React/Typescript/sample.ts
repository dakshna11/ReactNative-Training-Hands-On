//import {Invoice} from './modules/invoice.js'

const num = 30

//arrays
let ninjas: string[] = []

ninjas.push('asdf')

//union types
let mixed : (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let ninjaOne: object
ninjaOne = {name:'abcd', age:30}

let ninjaTwo:{
    name: string,
    age: number
}
ninjaTwo = {name:'aaa', age:45}

//function signatures
let greet : (a: string, b: string) => void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}
greet('dakshna', 'hello')

let calc: (a: number, b: number, c: string) => number
calc = (numOne: number, numTwo: number, action: string) => {
    if(action == 'add'){
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}
console.log(calc(5,7,'sub'))


type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>

//conditional types
interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}
type Example1 = Dog extends Animal ? number : string //number
type Example2 = RegExp extends Animal ? number : string //string


// classes
class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
}



// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {console.log(inv.client, inv.amount, inv.format())})


//interface

interface IsPerson{
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'ABCD',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
}
console.log(me)

const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name)
}
greetPerson(me)