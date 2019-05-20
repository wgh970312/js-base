function test() {
    console.log("调用函数");
}
test(); // 调用函数
// 函数返回值
// 函数定义
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数 
    console.log("\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B\u5B9A\u4E49 " + msg);
}
// 调用函数
caller();
// 带参数函数
function add(x, y) {
    return x + y;
}
console.log("\u5E26\u53C2\u51FD\u6570 " + add(1, 2));
// 可选参数和默认参数
// 可选参数
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// console.log(buildName("Bob"));                  // 错误，缺少参数
// console.log(buildName("Bob", "Adams", "Sr."));  // 错误，参数太多了
console.log(buildName("Bob", "Adams")); // 正确
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log("\u53EF\u9009\u53C2\u6570 " + buildName2("Bob") + "---" + buildName2("Bob", "Adams")); // 正确
// console.log(buildName2("Bob", "Adams", "Sr."));  // 错误，参数太多了
// 默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    // console.log("计算结果: ",discount); 
    return discount;
}
console.log("\u9ED8\u8BA4\u53C2\u6570 " + calculate_discount(1000) + "---" + calculate_discount(1000, 0.30));
// 剩余参数
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log("\u5269\u4F59\u53C2\u6570 " + buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"));
// 匿名函数
var msg = function () {
    return "hello world";
};
console.log("\u533F\u540D\u51FD\u6570 " + msg());
// 匿名函数自调用
(function () {
    console.log("\u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528 Hello!!");
})();
// 构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log("\u6784\u9020\u51FD\u6570 " + x);
// 递归函数
function factorial2(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial2(number - 1)); // 调用自身
    }
}
;
console.log("\u9012\u5F52\u51FD\u6570 " + factorial2(6)); // 输出 720
// Lambda 函数
var foo = function (x) { return 10 + x; };
console.log("Lambda(\u7BAD\u5934)\u51FD\u6570 " + foo(100)); //输出结果为 110
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
