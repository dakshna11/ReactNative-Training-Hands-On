console.log("145e4 = ",145e4);
console.log("145e-4 = ", 145e-4);

console.log("20 * '20' = ", 20*"20");
console.log("'20 * 20 = ","20" * 20);

console.log("Positive Infinity :", Number.POSITIVE_INFINITY);
console.log("1/0=",1/0);

console.log("Negative Infinity :", Number.NEGATIVE_INFINITY);
console.log("-1/0=",-1/0);

console.log("String divided by integer", 'A string'/2);
console.log("value of 0xef", 0xEF);

var num=16;
console.log("binary value of 16 is:", num.toString(2));  
console.log("decimal value of 16 is:", num.toString(10));
console.log("hexadecimal value of 16 is:", num.toString(16));
console.log("octal decimal value of 16 is:", num.toString(8));


var a=10;
console.log(typeof a);
var b=a.toString();
console.log(b,typeof b);

var x=3.255
console.log("round to 0 decimals", x.toFixed(0));
console.log("round to 0 decimals", x.toFixed(2));
console.log("round to 0 decimals", x.toFixed(5));

var y=12.789;
console.log("without precision", y.toPrecision());
console.log("precision is 2",y.toPrecision(2));
console.log("precision is 5",y.toPrecision(4));