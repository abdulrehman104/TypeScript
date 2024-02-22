let x: number = 3.1;
let y: number = 3.1;

//CONSTANTS:
let Pi = Math.PI;
let E = Math.E;

//BASIC METHODS.
let abs: number = Math.abs(x);
let ceil: number = Math.ceil(x);
let floor: number = Math.floor(x);

//TRIGNOMETRIC METHOD:
let sin: number = Math.sin(x);
let cos: number = Math.cos(x);
let tan: number = Math.tan(x);

// EXPONENTIAL AND LOGARITMIC METHODS:
let exp: number = Math.exp(x);
let log: number = Math.log(x);
let log10: number = Math.log10(x);

// POWER AND SQUARE ROOT METHOD:
let pow: number = Math.pow(x, y);
let sqrt: number = Math.sqrt(x);

// RANDOM NUMBER METHOD:
let random: number = Math.random() * 10;

// ADDITIONAL METHOD
let min: number = Math.min(21, 23, 43, 455, 656, 76767);
let max: number = Math.max(21, 23, 43, 455, 656, 76767);
let round: number = Math.round(21.8);
let trunc: number = Math.trunc(21.9);

console.log(Pi, E);
console.log(abs, ceil, floor, round);
console.log(sin, cos, tan);
console.log(exp, log, log10);
console.log(pow, sqrt);
console.log(random);
console.log(min, max, round, trunc);
