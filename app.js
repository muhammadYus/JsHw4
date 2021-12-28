let a = 1, b = 1; 
let c = ++a + --a + b-- - b; // 4
let d = b++ - a - ++b + b++ - --a; //-1
console.log(c);
console.log(d);
// let a = 2; 
// let x = 5 + (a *= 2 + (a += 4) + a++); // 
// // 33
// console.log(x);
"" + 1 + 0 // NaN 
"" - 1 + 0 // NaN
true + false // false
6 / "3" // NaN
"2" * "3" // 6
4 + 5 + "px" //NaN 
"$" + 4 + 5 // 
"4" - 2 // NaN
"4px" - 2 // NaN
7 / 0 // infinity
" -9 " + 5 // NaN
" -9 " - 5 // NaN
null + 1 // 1
undefined + 1 // underfined 

