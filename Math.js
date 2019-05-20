
let count = {}
let lower = 0; // 下限
let upper = 1;  // 上限
let isUpper = true ? 1 : 0; // 是否包括上限
let loop = 10000;

for(let i = 0; i < loop; i++){
    // let num = parseInt(Math.random() * 10);
    // let num = parseInt(Math.random() * (upper - lower + isUpper)) + lower;
    let num = parseInt(Math.random() * (8 + 1)) + 12;
    if(count[num]){
        count[num]++;
    }else{
        count[num] = 1;
    }
}
// count.forEach((item, index) => {
//     console.log(`${item}: ${count[index]/count.length}%`)
// });
for(let i in count){
    console.log(`${i}: ${count[i]/loop * 100}%`)
}