const log = (...arg)=>{
    return;
    console.log(...arg);
}

let array = [];
log('array: ', array);

let add = ['add'];
add.unshift('unshift');
add.push('push');
log('add: ', add);

let dlt = ['shift', 'dlt', 'pop'];
dlt.shift();
dlt.pop();
log('delete: ', dlt);

let concat1 = ['concat1'];
let concat2 = ['concat2'];
let concat3 = concat1.concat(concat2);
log('concat: ', concat3, '\n', '注意: 使用concat并未改变原数组，而是返回了一个新数组');
// log(concat1, concat2, concat3)

let join = ['j', 'o', 'i', 'n'];
let joinStr = join.join();
log('join: ', joinStr, '\n', '注意: join返回的字符串默认用逗号隔开，可传入一个参数String用以隔开字符串');

let reverse = ['r', 'e', 'v', 'e', 'r', 's', 'e'];
reverse.reverse();
log('reverse: ', reverse);

let slice = ['s', 'l', 'i', 'c', 'e'];
let sliceStr = slice.slice(0, 3);
log('slice: ', sliceStr, '\n', `注意: 
    1、slice需要两个参数(start, end)
    2、该方法并不会修改数组，而是返回一个子数组
    3、如果 end 未被规定, 那么slice()方法会选取从start到数组结尾的所有元素
    4、end下标的元素不会被选中`
);

let sort = [9, 6, 8, 5, 2, 7, 3, 4, 0, 5, 1, 6];
sort.sort((previous, next)=>{
    if(previous > next){
        return 1; // true 往后放
    }else if(previous < next){
        return -1;// false 往前放
    }else{
        return 0; // false 个人认为与 -1 一样, 返回-1或0都可以
    }
});
log('sort: ', sort);

let splice = [0, 1, 5];
splice.splice(2, 0, 2, 3, 4);
log('splice: ', splice, '\n', '注意: splice(index,howmany,item1,.....,itemX)');

let toString = ['t', 'o', 'S' ,'t', 'r', 'i', 'n', 'g'];
let string = toString.toString();
log('toString: ', string); // 貌似和join功能一样, 但是不能自定义分隔符

let toLocaleString = ['t', 'o', 'L', 'o', 'c', 'a', 'l', 'e', 'S' ,'t', 'r', 'i', 'n', 'g'];
let localString = toLocaleString.toLocaleString();
log('toLocaleString: ', localString); // 貌似和toString功能一样

let valueOf = ['v', 'a', 'l', 'u', 'e', 'O', 'f'];
// 这个不太懂，没研究出来
// let arr = new valueOf();
// log(arr)

let indexOf = ['i', 'n', 'd', 'e', 'x', 'O', 'f'];
log(indexOf.indexOf('f'))



// 填充一个相同内容的数组
// let sameArr = new Array(3).fill({a: 1});
// console.log(sameArr)