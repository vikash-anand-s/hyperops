function getNextDate(dateIncrement, separator=' / '){
    let newDate = new Date();
    var date = newDate.getDate() + dateIncrement;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

//Convert the date from plain string to date format (25012022 -> 25 / 01 / 2022)
function formatDate(date, separator=' / '){
    return `${date[0]}${date[1]}${separator}${date[2]}${date[3]}${separator}${date[4]}${date[5]}${date[6]}${date[7]}`;
}

//Convert the time from plain string to time format (0530 -> 05 : 30)
function formatTime(time, separator=' : '){
    return `${time[0]}${time[1]}${separator}${time[2]}${time[3]}`;
}

export default getNextDate;
export {formatDate, formatTime};