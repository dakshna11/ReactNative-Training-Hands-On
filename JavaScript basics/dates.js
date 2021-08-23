var time = new Date();
console.log("current time: ",time);

time=new Date(2021,8,23,10,15,17);
console.log("Year, Month, Day, hour, min, sec:",time);

time = new Date("August 23, 2021");
console.log("Initialized with date string:",time);

time = new Date("2021-08-21");
console.log(time);

console.log("My timezone offset in minutes",time.getTimezoneOffset());
console.log("The UTC time is:",time.toUTCString());