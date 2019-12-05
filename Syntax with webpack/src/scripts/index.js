import '../styles/index.scss';

console.log('Hello world !!!!!!!!!!!!!!!!');

//Constants : value which do not change and must be initialized

const carId = 42;

console.log(carId);

//Let and var keywords : let expects value to be declared before using where as var results undefined. Let scope is for block



console.log(a); //works fine and rpints undefined
var a = 10;

//console.log(b); error as cannot use let before declaring
let b = 100;

console.log(b);

if (true) {
    var foo = 9;
}
console.log(foo); //works as var scope is outside block


if (true) {
    let tap = 9;
    console.log(tap);
}

//  console.log(tap); //error as scope of let is block