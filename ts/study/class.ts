class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}

let lamborghini = new Car('V12');
console.log(`兰博基尼发动机是: ${lamborghini.engine}`)
lamborghini.disp();

// 继承
class Shape { 
    Area:number 

    constructor(a:number) { 
        this.Area = a 
    } 
} 

class Circle extends Shape { 
    disp():void { 
        console.log("圆的面积:  "+this.Area) 
    } 
}
   
let obj = new Circle(223); 
obj.disp()

//  多重继承
class Root { 
    str:string; 
 } 
  
 class Child extends Root {
     num: number;
 } 
 class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
  
 var obj2 = new Leaf(); 
 obj2.str ="hello"
 obj2.num = 1;
 console.log(`str = ${obj2.str}, num = ${obj2.num}`)

// 继承类的方法重写
class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
} 
  
class StringPrinter extends PrinterClass { 
    doPrint():void { 
        super.doPrint() // 调用父类的函数
        console.log("子类的 doPrint()方法。")
    } 
}

new StringPrinter().doPrint();

// Static 关键字
class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("num 值为 "+ StaticMem.num) 
    } 
} 
  
StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

// instanceof 运算符
class Person{ } 
var obj3 = new Person() 
var isPerson = obj3 instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);

//类和接口
interface ILoan { 
    interest:number 
} 
  
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
} 
  
var obj4 = new AgriLoan(10,1) 
console.log("利润为 : "+obj4.interest+"，抽成为 : "+obj4.rebate )

// 访问控制修饰符
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问。
class Encapsulate { 
    str1:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj5 = new Encapsulate() 
 console.log(obj5.str1)     // 可访问 
//  console.log(obj5.str2)   // 编译错误， str2 是私有的