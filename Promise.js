

let resolve = (res)=>{
    console.log(res);
    return ++res
}

let source = new Promise((resolve, reject)=>{
    let random = Math.random();
    console.log(random)
    random = random > 0.2 ? resolve(1) : reject(0);
})
source.then(resolve)
.then(resolve)
.catch((err)=>{
    console.log(err)
})