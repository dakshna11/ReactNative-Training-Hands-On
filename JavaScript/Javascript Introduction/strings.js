let str_double="JavaScript";
let str_single='programming language';

console.log("Welcome to " + str_double);
console.log("It is a "+ str_single);

let str_back=`Is ${str_double} a ${str_single}?`
console.log("String with back ticks", str_back);

let sum=`${1+2+3}`
console.log(`Value of ${sum}`);

let sentence ="HI \"how\" are you?"
console.log(sentence);

let multiline=
` this is a
  string  which
  spans multiple lines`;
console.log(multiline);

var str1="hi";
var str2="hi";

var obj1=new String("hi");
var obj2=new String("hi");

console.log(typeof str1);
console.log(typeof obj1);

console.log("str1==str2?",str1==str2);
console.log("str1==obj1",str1==obj1);
console.log("obj1==obj2",obj1==obj2);
console.log("valueof obj1 == value of obj2",obj1.valueOf()==obj2.valueOf());


console.log("str1===str2?",str1===str2);
console.log("str1===obj1",str1===obj1);
console.log("obj1===obj2",obj1===obj2);
console.log("valueof obj1 === value of obj2",obj1.valueOf()===obj2.valueOf());

let empName="Dakshna Moorthy";
console.log("characters : ",empName.length);
console.log("Index of r",empName.indexOf("o"));
console.log("M occurs at position ",empName.search("M"));

var line="Fundamentals of JavaScript";
console.log("Slice (1,12)",line.slice(1,12));
console.log("Slice (-23,-16)",line.slice(-23,-16));
console.log("Slice (13)",line.slice(13));

console.log("Repalcing 'JavaScript' with 'Web programming", line.replace("JavaScript","Web Programming"));
console.log("Replacing 'javascript' with 'Python'", line.replace("javascript","Python"));
console.log("Replacing 'javascript/i' with 'Python'", line.replace(/javascript/i,"Python"));
console.log("Default replace of 'a' with 'A'",line.replace("a","A"));
console.log("Global repalce of 'a' with 'A' ", line.replace(/a/g,"A"));

console.log("Splitting the line on space",line.split(" "));

var myString = "          Hey, this is JS           ";
console.log("Before triming",myString);
console.log("After Triming",myString.trim());
