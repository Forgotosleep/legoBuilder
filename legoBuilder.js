/* LEGO BLOCKS */
function makeLegos([small, big, goal]) {
    return (5 * big >= goal) ? (goal % 5  && (goal % 5 >= goal || goal % 5 == 0)) : (5 * big + small >= goal ?? false)  // Did it! One line! :D
}

function makeLegoPrinter(array) {
    console.log(array, ' ', makeLegos(array));
}

// Test Cases
let test1 = [3, 1, 8]  // true
let test2 = [3, 1, 9]  // false
let test3 = [3, 2, 10]  // false
let test4 = [3, 2, 8]  // true
let test5 = [6, 1, 11]  // true
let test6 = [6, 0, 11]  // false
let test7 = [1, 4, 11]  // true
let test8 = [0, 3, 10]  // true
let test9 = [1, 4, 12]  // false
let test10 = [3, 1, 7]  // true
let test11 = [1, 1, 7]  // false
let test12 = [2, 1, 7]  // true
let test13 = [7, 1, 11]  // true
let test14 = [7, 1, 8]  // true
let test15 = [7, 1, 13]  // false
let test16 = [43, 1, 46]  // true
let test17 = [40, 1, 46]  // false
let test18 = [40, 2, 47]  // true
let test19 = [40, 2, 50]  // true
let test20 = [40, 2, 52]  // false
let test21 = [22, 2, 33]  // false
let test22 = [0, 2, 10]  // true
let test23 = [1000000, 1000, 1000100]  // true
let test24 = [2, 1000000, 100003]  // false
let test25 = [20, 0, 19]  // true
let test26 = [20, 0, 21]  // false
let test27 = [20, 4, 51]  // false
let test28 = [20, 4, 39]  // true

console.log('LEGO BUILDER');
makeLegoPrinter(test1);
makeLegoPrinter(test2);
makeLegoPrinter(test3);
makeLegoPrinter(test4);
makeLegoPrinter(test5);
makeLegoPrinter(test6);
makeLegoPrinter(test7);
makeLegoPrinter(test8);
makeLegoPrinter(test9);
makeLegoPrinter(test10);
makeLegoPrinter(test11);
makeLegoPrinter(test12);
makeLegoPrinter(test13);
makeLegoPrinter(test14);
makeLegoPrinter(test15);
makeLegoPrinter(test16);
makeLegoPrinter(test17);
makeLegoPrinter(test18);
makeLegoPrinter(test19);
makeLegoPrinter(test20);
makeLegoPrinter(test21);
makeLegoPrinter(test22);
makeLegoPrinter(test23);
makeLegoPrinter(test24);
makeLegoPrinter(test25);
makeLegoPrinter(test26);
makeLegoPrinter(test27);
makeLegoPrinter(test28);