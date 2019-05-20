// for循环
// for
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log('for', factorial);
// for...in
var j;
var n = ['a', 'b', 'c'];
for (j in n) {
    console.log('for in:', n[j]);
}
// for...of
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log('for of', entry); // 1, "string", false
}
// forEach
var list = [4, 5, 6];
list.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log("forEach: " + val + ", " + idx + ", " + array);
});
// every
list.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log("every: " + val + ", " + idx + ", " + array);
    if (val === 5) {
        return false;
    }
    return true; // Continues
    // Return false will quit the iteration
});
