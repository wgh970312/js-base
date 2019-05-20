
// for循环
// for
let num: number = 5; 
let i: number; 
let factorial: number = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log('for', factorial)

// for...in
let j: string; 
let n: string[] = ['a', 'b', 'c']
 
for(j in n) {
   console.log('for in:', n[j])  
}

// for...of
let someArray = [1, "string", false];
 
for (let entry of someArray) {
   console.log('for of', entry); // 1, "string", false
}

// forEach
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
   // val: 当前值
   // idx：当前index
   // array: Array
   console.log(`forEach: ${val}, ${idx}, ${array}`)
});

// every
list.every((val, idx, array) => {
   // val: 当前值
   // idx：当前index
   // array: Array
   console.log(`every: ${val}, ${idx}, ${array}`)
   if(val === 5){
      return false;
   }
   return true; // Continues
   // Return false will quit the iteration
});