"use strict";
//سوال اول
console.log(Number("234a"));    //NaN

let n='1' + 2 + 2;
console.log(typeof n,n);  //string 122

let apples = "2" ;
let oranges = "3";
console.log(+apples + +oranges); //number 5

let counter = 1;
console.log( 2 * ++counter); //number 4

console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false


// سوال دوم
let a = prompt("Please enter the first number :"),
    b = prompt("Please enter the second number :"),
    c = prompt("Please enter the second number :");

    if (a === b && b > c && a !== 0) {
        console.log(" yes مثلث متساوی ‌الساقین");
    }
    else if(a === b && a === c && b === c && b!== 0){
        console.log(" yes  مثلث متساوی الاضلاع");
    }
    else if(a ** 2 + b ** 2 == c ** 2 && c!==0){
        console.log(" yes مثلث قائم الزاویه");
    }
    else{
        console.log("no");
    }

//سوال سوم 
let number = prompt("Please enter a number ::");
let x =number.toString();
console.log(x.length);

// سوال چهارم 

let add_1 = prompt("Please enter the first number ::");
let add_2 = prompt("Please enter the second number ::");

let max ;
 (add_1 > add_2) ? max= add_1 : max = add_2;

// if (add_1 > add_2) {
    // max = add_1;            // روش استفاده از ساختار شرطی if
// }
// else{
//     max = add_2;
// }
for (let i =0; i<=max; i++) {
  if (add_1 % i ==0 && add_2 % i ==0) {
      console.log(i)
  }
}