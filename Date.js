
const transform = (date)=>{
    let type = typeof date;
    // console.log(type, date)
    
    if(!(type === 'number' 
        || type === 'string' 
        || type === 'object'
    )) return {error: `不可使用的类型 ${type}`}

    if(type === 'number'){
        let dateLength = String(date).length;
        if(dateLength < 10) return {error: `time stamp 长度不够 ${dateLength}`};
        if(dateLength === 10){
            date = date * 1000;
        }
        date = new Date(date);
    }else if(type === 'string'){
        date = new Date(date)
    }

    let year = date.getFullYear();
    let month = date.getMonth();
    let time = date.getDate();
    let start = new Date(`${year}-${month + 1}-${time} 00:00:00`).getTime();
    let end = start + 24 * ONE_HOUR;

    return {year, month: ++month, date: time, start, end}
}
const isToday = (timeStamp)=>{
    timeStamp = Number(timeStamp);
    if(!isNaN(timeStamp)){
        let date = transform(new Date())
        let diff = date.end - timeStamp;
        diff = diff > 0 ? --diff : diff;
        return {
            isToday: timeStamp >= date.start && timeStamp <= date.end
            , passed: parseInt(diff / (24 * ONE_HOUR))
        }
    }
}
const ONE_SECOND = 1000, ONE_MINUTE = 60 * ONE_SECOND, ONE_HOUR = 60 * ONE_MINUTE;


// console.log(isToday(1555466416671));
console.log(new Date('2019/4/19 00:00:00').getTime())
