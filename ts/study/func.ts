
function test() {   // 函数定义
    console.log("调用函数") 
} 
test()              // 调用函数


// 函数返回值
// 函数定义
function greet():string { // 返回一个字符串
    return "Hello World"
} 
function caller() { 
    var msg = greet() // 调用 greet() 函数 
    console.log(`函数返回值类型定义 ${msg}`) 
}
// 调用函数
caller()


// 带参数函数
function add(x: number, y: number): number {
    return x + y;
}
console.log(`带参函数 ${add(1,2)}`)


// 可选参数和默认参数
// 可选参数
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
// console.log(buildName("Bob"));                  // 错误，缺少参数
// console.log(buildName("Bob", "Adams", "Sr."));  // 错误，参数太多了
console.log(buildName("Bob", "Adams"));         // 正确

function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
 
console.log(`可选参数 ${buildName2("Bob")}---${buildName2("Bob", "Adams")}`);  // 正确
// console.log(buildName2("Bob", "Adams", "Sr."));  // 错误，参数太多了
// 默认参数
function calculate_discount(price:number,rate:number = 0.50) { 
    let discount = price * rate; 
    // console.log("计算结果: ",discount); 
    return discount;
}
console.log(`默认参数 ${calculate_discount(1000)}---${calculate_discount(1000,0.30)}`)


// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
console.log(`剩余参数 ${buildName3("Joseph", "Samuel", "Lucas", "MacKinzie")}`);


// 匿名函数
let msg = function() { 
    return "hello world";  
} 
console.log(`匿名函数 ${msg()}`);


// 匿名函数自调用
(function () {    
    console.log(`匿名函数自调用 Hello!!`)     
 })()


 // 构造函数
let myFunction = new Function("a", "b", "return a * b"); 
let x = myFunction(4, 3); 
console.log(`构造函数 ${x}`);


// 递归函数
function factorial2(number) {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial2(number - 1));     // 调用自身
    } 
}; 
console.log(`递归函数 ${factorial2(6)}`);      // 输出 720


// Lambda 函数
let foo = (x:number)=>10 + x
console.log(`Lambda(箭头)函数 ${foo(100)}`)      //输出结果为 110


// 函数重载
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz"); 