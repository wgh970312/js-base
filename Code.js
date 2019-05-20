// Seek common ground while reserving differences
// 求同存异
let scgwrd = (arr1, arr2)=>{
    let arr3 = [];
    let arr11 = arr1.concat([]);
    arr1.forEach((e, i) => {
        let index2 = arr2.indexOf(e);
        if(index2 != -1){
            let index1 = arr11.indexOf(e);
            arr3.push(arr1[i]);
            console.log(arr11.splice(index1, 1));
            console.log(arr2.splice(index2, 1));
        }
    });

    return {arr1: arr11, arr2, arr3}
}

// let arrOne = ['a', 'r', 'r', 'O', 'n', 'e'];
// let arrTwo = ['a', 'r', 'r', 'T', 'w', '0'];
// console.log(scgwrd(arrOne, arrTwo))

let n = [1, 2, 3, 4];
let m = [2, 3, 5, 6];
console.log(scgwrd(n, m))
